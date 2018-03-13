function add({ a, b}) {
    return a + b;
};

function addSquare({a,b}) {
    return Math.pow(add({a,b}), 2);
};
export default {
    add,
    addSquare,
};