/* eslint-disable */

function doSomething(menus) {
    for (const menu of menus) {
        // ...
        // ...
        // ...
        // ...
        if (true) {
            // ...
            menu.isOpen = /aaa/.test(menu.name);
        }

        for (const category of menu.categories) {
            // ...
            // ...
            // ...
            // ...
            // ...
            if ((true && false) || true) {
                // ...
                category.timezone = '...';
            }

            for (const item of category.items) {
                // ...
                // ...
                // ...
                item.price = 0;
            }
        }
    }
}
// =========================================
function isMenuOpen(menu) {
    // ...
    // ...
    // ...
    // ...
    let isOpen;

    if (true) {
        // ...
        return isOpen = /aaa/.test(menu.name);
    }

    return false;
}
function findTimezone(category) {
    // ...
    // ...
    // ...
    // ...
    // ...
    let timezone;

    if ((true && false) || true) {
        // ...
        timezone = category.timezone = '...';
    }

    return timezone;
}
function updateItemPrices(items) {
    return items.map((item) => {
        // ...
        // ...
        // ...

        return {
            ...item,
            price: 0,
        };
    });
}
function updateCategories(categories) {
    return categories.map((category) => ({
        ...category,
        timezone: findTimezone(category),
        items: updateItemPrices(category.items),
    }));
}
function getMenuData(menus) {
    return menus.map((menu) => ({
        ...menu,
        isOpen: isMenuOpen(menu),
        categories: updateCategories(menu.categories),
    }));
}