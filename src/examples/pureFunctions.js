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

function doSomething(menus) {
    const updatedMenus = menus.map((menu) => {
        // ...
        // ...
        // ...
        // ...
        let isOpen;

        if (true) {
            // ...
            isOpen = /aaa/.test(menu.name);
        }

        const categories = menu.categories.map((category) => {
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

            category.items.map((item) => {
                // ...
                // ...
                // ...

                return {
                    ...item,
                    price: 0,
                };
            });

            return {
                ...category,
                items,
                timezone,
            };
        });

        return {
            ...menu,
            categories,
            isOpen,
        };
    });

    return updatedMenus;
}
// --------------------------------------

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
    return categories.map((category) => {
        const timezone = findTimezone(category);
        const items = updateItemPrices(category.items);

        return {
            ...category,
            timezone,
            items,
        };
    });
}

function doSomething(menus) {
    const updatedMenus = menus.map((menu) => {
        const isOpen = isMenuOpen(menu);
        const categories = updateCategories(menu.categories);

        return {
            ...menu,
            categories,
            isOpen,
        };
    });

    return updatedMenus;
}