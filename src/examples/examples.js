/* eslint-disable */

~~(8/3) === Math.floor(8/3)


function foo() {
    // ...
    // ...
    // ...
    // ...

    const params = document.location.search.substr(1).split('&').reduce((map, param) => {
        const parts = param.split('=');
        map[parts[0]] = parts[1];
        return map;
    }, {});

    // ...
    // ...
    // ...
    // ...
}

function getUrlParams() {
    return document.location.search.replace('?', '').split('&').reduce((map, param) => {
        const parts = param.split('=');
        map[parts[0]] = parts[1];
        return map;
    }, {});
}

