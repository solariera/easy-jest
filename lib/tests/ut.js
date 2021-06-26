/**
 * ut
 * @see https://doc.ebichu.cc/jest/docs/ja/using-matchers.html
 * @param fn
 * @param description
 * @param params
 * @param mode
 * @param ret
 * @returns
 */
const ut = (fn, description, params, mode, ret) => {
    switch (mode) {
        case 'toBeGreaterThan':
            return test(description, () => expect(fn(...params)).toBeGreaterThan(ret));
        case 'toBeGreaterThanOrEqual':
            return test(description, () => expect(fn(...params)).toBeGreaterThanOrEqual(ret));
        case 'toBeLessThan':
            return test(description, () => expect(fn(...params)).toBeLessThan(ret));
        case 'toBeLessThanOrEqual':
            return test(description, () => expect(fn(...params)).toBeLessThanOrEqual(ret));
        case 'toBeCloseTo':
            return test(description, () => expect(fn(...params)).toBeCloseTo(ret));
        case 'toMatch':
            return test(description, () => expect(fn(...params)).toMatch(ret));
        case 'not.toMatch':
            return test(description, () => expect(fn(...params)).not.toMatch(ret));
        case 'toBeNull':
            return test(description, () => expect(fn(...params)).toBeNull());
        case 'toBeUndefined':
            return test(description, () => expect(fn(...params)).toBeUndefined());
        case 'toBeDefined':
            return test(description, () => expect(fn(...params)).toBeDefined());
        case 'toBeTruthy':
            return test(description, () => expect(fn(...params)).toBeTruthy());
        case 'toBeFalsy':
            return test(description, () => expect(fn(...params)).toBeFalsy());
        case 'toContain':
            return test(description, () => expect(fn(...params)).toContain(ret));
        case 'not.toContain':
            return test(description, () => expect(fn(...params)).not.toContain(ret));
        case 'toBe':
            return test(description, () => expect(fn(...params)).toBe(ret));
        case 'not.toBe':
            return test(description, () => expect(fn(...params)).not.toBe(ret));
        case 'toEqual':
            return test(description, () => expect(fn(...params)).toEqual(ret));
        case 'not.toEqual':
            return test(description, () => expect(fn(...params)).not.toEqual(ret));
    }
};
export { ut };
