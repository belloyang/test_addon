"use strict";
exports.__esModule = true;
exports.add = exports.hello = void 0;
var testAddon = require('./build/Release/testaddon.node');
function hello() {
    return testAddon.hello();
}
exports.hello = hello;
function add(a, b) {
    return testAddon.add(a, b);
}
exports.add = add;
