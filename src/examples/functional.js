/* eslint-disable */

// forEach instead of map
function foo(arr) {
    const newArr = [];

    arr.map((next) => {
        next.total = next.price * next.quantity;
        newArr.push(next);
    });

    return newArr;
}

// forEach and push with if instead of filter
function foo(arr) {
    const newArr = [];

    arr.forEach((next) => {
        if (true) {
            newArr.push(next);
        }
    });

    return newArr;
}