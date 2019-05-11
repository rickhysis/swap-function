/**
 * Swap variables using temporary buffer.
 * @param x 
 * @param y 
 */
export function buf(x: number, y: number): Array<number> {
    let tmp = x;
    x = y
    y = tmp

    return [x, y]
}

/**
 * Swap variables using addition and subtraction.
 * @param x 
 * @param y 
 */
export function addsub(x: number, y: number): Array<number> {
    x = x + y
    y = x - y
    x = x - y

    return [x, y]
}

/**
 * Swap variables using XOR
 * @param x 
 * @param y 
 */
export function xor(x: number, y: number): Array<number> {
    x ^= y
    y ^= x
    x ^= y

    return [x, y]
}

/**
 * Swap individual bits using XOR.
 * @param x 
 * @param y 
 * @param b 
 */
export function bitsXor(x: number, y: number, b: string): Array<number> {
    x = x ^ (y & +b)
    y = y ^ (x & +b)
    x = x ^ (y & +b)

    return [x, y]
}