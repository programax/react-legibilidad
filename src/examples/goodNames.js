/* eslint-disable */

function doSomething(menus, newItem) {
    const targetMenu = {};
    for (const menu of menus) {
        for (const category of menu.categories) {
            for (const item of category.items) {
                for (const option of item.options) {
                    const newItemOptions = newItem.options;

                    // ...

                    for (const newItemOption of newItemOptions) {
                        // ...
                        // ...
                        // ...
                        // ...
                        if (newItemOption.id === option.id && menu === targetMenu) {

                        }
                    }
                }
            }
        }
    }
}

function doSomething(mnus, nItm) {
    const tMnu = {};
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
                        if (op.id === opt.id && mnu === tMnu) {

                        }
                    }
                }
            }
        }
    }
}
