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
const convertStrings = (values) => {
    return values.map((value) => convertString(value));
};
export { convertString, convertStrings };
