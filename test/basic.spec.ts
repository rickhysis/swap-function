import { buf, bitsXor} from '../src'
import { expect } from 'chai';
import 'mocha';

describe('Basic', () => {

    it('should return true to swap variables using temporary buffer', () => {
        const [x, y] = buf(3, 2);
        expect([x, y]).deep.equal([2, 3]);
    });

    it('should return true to swap individual bits using XOR', () => {
        const [x, y] = bitsXor(3, 2, '0011');
        expect([x, y]).deep.equal([2, 3]);
    });

});