/**
 * Swap variables using temporary buffer.
 * @param x
 * @param y
 */
export declare function buf(x: number, y: number): Array<number>;
/**
 * Swap variables using addition and subtraction.
 * @param x
 * @param y
 */
export declare function addsub(x: number, y: number): Array<number>;
/**
 * Swap variables using XOR
 * @param x
 * @param y
 */
export declare function xor(x: number, y: number): Array<number>;
/**
 * Swap individual bits using XOR.
 * @param x
 * @param y
 * @param b
 */
export declare function bitsXor(x: number, y: number, b: string): Array<number>;
