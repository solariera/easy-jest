"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStrings = exports.convertString = void 0;
const convertString = (value) => {
    if (value === undefined)
        return 'undefined';
    if (value === null)
        return 'null';
    if (typeof value === 'string')
        return value;
    if (typeof value === 'number')
        return value.toString();
    if (typeof value === 'boolean')
        return value.toString();
    return JSON.stringify(value);
};
exports.convertString = convertString;
const convertStrings = (values) => {
    return values.map((value) => convertString(value));
};
exports.convertStrings = convertStrings;
