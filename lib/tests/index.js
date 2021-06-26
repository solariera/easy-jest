"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = void 0;
const convert_string_1 = require("../convert-string");
const ut_1 = require("./ut");
/**
 * tests
 * @param fn
 * @param data
 */
const tests = (fn, data) => {
    for (let i = 0; i < data.length; i++) {
        const { id, params, ret, mode = 'toBe' } = data[i];
        const parameters = convert_string_1.convertStrings(params);
        const returnValue = convert_string_1.convertString(ret);
        const label = ' ' + (i + 1) + (id ? ': ' + id : '');
        const description = [
            label,
            'test         : ' + fn.name,
            'compare mode : ' + mode,
            '@params      : ' + parameters.join(', '),
            '@params type : ' + params.map((param) => typeof param).join(', '),
            '@return      : ' + returnValue,
            '@return type : ' + typeof ret,
            '',
        ].join('\n');
        ut_1.ut(fn, description, params, mode, ret);
    }
};
exports.tests = tests;
