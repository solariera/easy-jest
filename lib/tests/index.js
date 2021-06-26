"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = void 0;
const convert_string_1 = require("../convert-string");
const generalMode = ['toBe', 'not.toBe', 'toEqual', 'not.toEqual'];
const booleanMode = ['toBeNull', 'toBeUndefined', 'toBeDefined', 'toBeTruthy', 'toBeFalsy'];
const numberMode = ['toBeGreaterThan', 'toBeGreaterThanOrEqual', 'toBeLessThan', 'toBeLessThanOrEqual'];
const floatMode = ['toBeCloseTo'];
const stringMode = ['toMatch', 'not.toMatch'];
const arrayMode = ['toContain', 'not.toContain'];
const throwMode = ['toThrow', 'not.toThrow'];
const tests = (fn, data) => {
    for (let i = 0; i < data.length; i++) {
        const { id, params, ret, mode } = data[i];
        const parametersStrings = convert_string_1.convertStrings(params);
        const returnValueString = convert_string_1.convertString(ret);
        const label = ' ' + (i + 1) + (id ? ': ' + id : '');
        const description = [
            label,
            'test         : ' + fn.name,
            'compare mode : ' + mode,
            '@params      : ' + parametersStrings.join(', '),
            '@params type : ' + params.map((param) => typeof param).join(', '),
            '@return      : ' + returnValueString,
            '@return type : ' + typeof ret,
            '',
        ].join('\n');
        if (mode && numberMode.some((value) => value === mode)) {
            const value = ret;
            if (mode === 'toBeGreaterThan')
                return test(description, () => expect(fn(...params)).toBeGreaterThan(value));
            if (mode === 'toBeGreaterThanOrEqual')
                return test(description, () => expect(fn(...params)).toBeGreaterThanOrEqual(value));
            if (mode === 'toBeLessThan')
                return test(description, () => expect(fn(...params)).toBeLessThan(value));
            if (mode === 'toBeLessThanOrEqual')
                return test(description, () => expect(fn(...params)).toBeLessThanOrEqual(value));
        }
        if (mode && floatMode.some((value) => value === mode)) {
            const value = ret;
            if (mode === 'toBeCloseTo')
                return test(description, () => expect(fn(...params)).toBeCloseTo(value));
        }
        if (mode && stringMode.some((value) => value === mode)) {
            const value = ret;
            if (mode === 'toMatch')
                return test(description, () => expect(fn(...params)).toMatch(value));
            if (mode === 'not.toMatch')
                return test(description, () => expect(fn(...params)).not.toMatch(value));
        }
        if (mode && throwMode.some((value) => value === mode)) {
            const value = ret;
            if (mode === 'toThrow')
                return test(description, () => expect(fn(...params)).toThrow(value));
            if (mode === 'not.toThrow')
                return test(description, () => expect(fn(...params)).not.toThrow(value));
        }
        if (mode === 'toBeNull')
            return test(description, () => expect(fn(...params)).toBeNull());
        if (mode === 'toBeUndefined')
            return test(description, () => expect(fn(...params)).toBeUndefined());
        if (mode === 'toBeDefined')
            return test(description, () => expect(fn(...params)).toBeDefined());
        if (mode === 'toBeTruthy')
            return test(description, () => expect(fn(...params)).toBeTruthy());
        if (mode === 'toBeFalsy')
            return test(description, () => expect(fn(...params)).toBeFalsy());
        if (mode === 'toContain')
            return test(description, () => expect(fn(...params)).toContain(ret));
        if (mode === 'not.toContain')
            return test(description, () => expect(fn(...params)).not.toContain(ret));
        if (mode === 'toBe')
            return test(description, () => expect(fn(...params)).toBe(ret));
        if (mode === 'not.toBe')
            return test(description, () => expect(fn(...params)).not.toBe(ret));
        if (mode === 'toEqual')
            return test(description, () => expect(fn(...params)).toEqual(ret));
        if (mode === 'not.toEqual')
            return test(description, () => expect(fn(...params)).not.toEqual(ret));
        return test(description, () => expect(fn(...params)).toBe(ret));
    }
};
exports.tests = tests;
