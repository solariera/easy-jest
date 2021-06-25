"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = void 0;
const convert_string_1 = require("../convert-string");
const tests = (fn, data) => {
    for (let i = 0; i < data.length; i++) {
        const { id, params, ret, mode } = data[i];
        const parameters = convert_string_1.convertStrings(params);
        const returnValue = convert_string_1.convertString(ret);
        const no = i + 1;
        const description = [
            ' ' + no + (id ? ': ' + id : ''),
            'test         : ' + fn.name,
            '@params      : ' + parameters.join(', '),
            '@params type : ' + params.map((param) => typeof param).join(', '),
            '@return      : ' + returnValue,
            '@return type : ' + typeof returnValue,
            '',
        ].join('\n');
        if (mode === 'toStrictEqual')
            test(description, () => expect(fn(...params)).toStrictEqual(ret));
        if (mode === 'toEqual')
            test(description, () => expect(fn(...params)).toEqual(ret));
        if (mode === 'toBe' || !mode)
            test(description, () => expect(fn(...params)).toBe(ret));
    }
};
exports.tests = tests;
