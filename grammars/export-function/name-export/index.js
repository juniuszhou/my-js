"use strict"
function names() {

}

module.exports = names;

//------ lib.js ------
names.sqrt = Math.sqrt;
names.square = function square(x) {
    return x * x;
}
names.diag = function diag(x, y) {
    return sqrt(square(x) + square(y));
}

