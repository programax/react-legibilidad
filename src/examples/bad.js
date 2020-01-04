/* eslint-disable */

async function getOrderJSON(ctx) {
    ctx.user = ctx.anon ? ctx.anon[0] : ctx.order.user;

    // either the customerID is buried in a ref on the context or
    // we use the customer id from the order, in which case
    // we convert the objectId using toString
    const id = (
        (ctx.customer && ctx.customer[0]) ||
        (ctx.order.customer && ctx.order.customer._id.toString())
    );

    // get the customer's image/logo
    const img = await customerRepo.getImage(id);

    if (img) {
        ctx.customerImage = img.toObject();
    }

    const json = _.extend({}, ctx.order, {
        user: (ctx.user && ctx.user.toObject) ? ctx.user.toObject() : ctx.order.user,
        isCash: ctx.order.paymentMethod === 'cash',
        hasTip: !!ctx.order.tip && ctx.order.tip > 0,
        showOptions: !!ctx.showOptions,
        customer: Array.isArray(ctx.order.customer) ? ctx.order.customer[0] : ctx.order.customer,
        location: Array.isArray(ctx.order.location) ? ctx.order.location[0] : ctx.order.location,
        deliveryAddress: Array.isArray(ctx.order.deliveryAddress) ?
            ctx.order.deliveryAddress[0] : ctx.order.deliveryAddress,
        takeoutAddress: Array.isArray(ctx.order.takeoutAddress) ?
            ctx.order.takeoutAddress[0] : ctx.order.takeoutAddress,
        webViewUrl: `//${config.emailWebViewUrl}order/${ctx.order._id}/receipt/web/`,
        pdfViewUrl: `//${config.emailWebViewUrl}order/${ctx.order._id}/receipt/pdf/`,
    });

    // set the user, (normalize the anon array)
    if (json.anon && !Array.isArray(json.anon)) {
        json.anon = [json.anon];
    }
    json.user = !!json.anon && json.anon.length > 0 ? json.anon[0] : json.user;

    // derive the subtotal
    json.subtotal = json.subtotal || (
        json.total - json.tax - json.deliveryCharge - (json.tip && parseFloat(json.tip)
    ));

    // derive the correct profile
    json.profile = json.user && Array.isArray(json.user.profile)
        ? json.user.profile[0]
        : json.user || {};

    // mobile captures a fullname, web still captures first & last; normalize
    json.displayName = json.profile.name || `${json.profile.first} ${json.profile.last}`;

    json.locationAddress = json.location && json.location.address && json.location.address[0];
    json.customerAddress = json.customer && json.customer.address && json.customer.address[0];

    // if the order is existing, it will have a transaction; get the card from there...otherwise assume the card is @ ctx.card
    const trans = Array.isArray(ctx.order.transactions) && ctx.order.transactions[0];
    const card = trans && Array.isArray(trans.creditCard) ? trans.creditCard[0] : ctx.card;
    const tz = common.getTzName(json.location.timezone);

    // normalize the orderTime that is sent, based on the locations timezone
    ctx.order.tz = tz;
    json.orderTz = tz;
    json.orderTimeTz = moment(json.orderTime).tz(tz).format('YYYY-MM-DD hh:mm A');
    json.currentDate = moment(new Date()).tz(tz).format('MMM. DD, YYYY');
    json.currentTime = moment(new Date()).tz(tz).format('hh:mm A');
    json.currentYear = moment(new Date()).tz(tz).format('YYYY');

    // if a card was provided, add its info to the json template
    if (card) {
        json.cardLast4 = card.number;
        json.cardType = card.cardType;
    }

    // surface the logo info, if available
    json.hasLogo = !!ctx.customerImage && !!ctx.customerImage.url;
    json.logoUrl = ctx.customerImage ? `https://${ctx.customerImage.url}` : '';

    json.hasPhone = !!json.location.phone;
    json.hasDistance = Boolean(json.deliveryAddress && json.deliveryAddress.distance);
    if (json.hasDistance) {
        json.deliveryAddress.distance = parseFloat(json.deliveryAddress.distance).toFixed(2);
    }
    json.hasDeliveryCharge = !!json.deliveryCharge && json.deliveryCharge > 0;

    json.hasPromotions = json.promotions && json.promotions.length > 0;
    json.hasOffers = json.offers && json.offers.length > 0;

    // if there are promotions, attach the promo items for each reference
    if (json.hasPromotions) {
        _.each(json.promotions, (promo) => {
            const items = _.filter(json.items, item => (
                item.isPromoItem && item.promotion.toString() === promo._id.toString()
            ));

            promo.items = items;
        });
    }

    // menu items
    _.each(json.items, (item) => {
        _.each(item.modifiers, getOrderItemModifierDisplay.bind(null, item));
    });

    // get the prep times
    const temp = await getPrepTimes(ctx);

    json.hasPrepTimes = temp.hasPrepTimes;
    json.prepTimes = temp.prepTimes;
    temp.json = json;

    return temp;
}