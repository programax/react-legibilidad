/* eslint-disable */

const allMenus = [
    {
        // ...
        categories: [
            {
                // ...
                items: [
                    {
                        // ...
                        price: 1,
                        options: [
                            {
                                // ...
                                price: 1,
                            },
                        ],
                    }
                ],
            },
        ],
    },
];

function doSomething(menus, newItem) {
    for (const menu of menus) {
        for (const category of menu.categories) {
            for (const item of category.items) {
                for (const option of item.options) {
                    // TODO
                }
            }
        }
    }
}

function doSomething(mnus, nItm) {
    for (const mnu of mnus) {
        for (const cat of m.categories) {
            for (const itm of ca.items) {
                for (const opt of it.options) {
                    const nOpt = nItm.options;

                    // ...

                    for (const op of nOpt) {
                        // ...
                        // ...
                        // ...
                        // ...
                        // ...
                        // ...
                        if (op.name.replace('', 'a')) {
                            // ...
                        }
                        // ...
                        // ...
                        // ...
                        if (op.id === opt.id && mnu === ID) {

                        }
                    }
                }
            }
        }
    }
}
