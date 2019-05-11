"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Swap variables using temporary buffer.
 * @param x
 * @param y
 */
function buf(x, y) {
    var tmp = x;
    x = y;
    y = tmp;
    return [x, y];
}
exports.buf = buf;
/**
 * Swap variables using addition and subtraction.
 * @param x
 * @param y
 */
function addsub(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return [x, y];
}
exports.addsub = addsub;
/**
 * Swap variables using XOR
 * @param x
 * @param y
 */
function xor(x, y) {
    x ^= y;
    y ^= x;
    x ^= y;
    return [x, y];
}
exports.xor = xor;
/**
 * Swap individual bits using XOR.
 * @param x
 * @param y
 * @param b
 */
function bitsXor(x, y, b) {
    x = x ^ (y & +b);
    y = y ^ (x & +b);
    x = x ^ (y & +b);
    return [x, y];
}
exports.bitsXor = bitsXor;
