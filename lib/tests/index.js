import { convertString, convertStrings } from '../convert-string';
import { ut } from './ut';
/**
 * tests
 * @param fn
 * @param data
 */
const tests = (fn, data) => {
    for (let i = 0; i < data.length; i++) {
        const { id, params, ret, mode = 'toBe' } = data[i];
        const parameters = convertStrings(params);
        const returnValue = convertString(ret);
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
        ut(fn, description, params, mode, ret);
    }
};
export { tests };
