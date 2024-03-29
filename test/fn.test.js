/**
 * Created by appleex on 2020/5/9
 */
const __fn = require('../lib/fn')

describe('/** __fn **/', () => {

    test('__fn.deepCopy', () => {
        const a = { a: 1, c: 2 };
        // console.log(__fn.deepCopy(a));
        expect(__fn.deepCopy(a)).toEqual({a: 1, c: 2});
    });

    test('__fn.compare', () => {
        expect(__fn.compare('a', 'b')).toBe(-1);
        expect(__fn.compare(1, 2)).toBe(-1);
    });
    test('__fn.mergeDeep', () => {
        const a = { a: 1, c: 1 }
        const b = { b: 2, c: 3 }

        // console.log(__fn.mergeDeep(b, a))
        expect(__fn.mergeDeep(a, b)).toEqual({ b: 2, c: 3, a: 1});
    });
});

