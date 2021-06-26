import { convertString, convertStrings } from '../convert-string';
import { ArrayCompare } from './ut';
import { BooleanCompare } from './ut';
import { FloatCompare } from './ut';
import { GeneralCompare } from './ut';
import { NumberCompare } from './ut';
import { StringCompare } from './ut';
import { ut } from './ut';

export type TestData<T extends (...args: any) => any> =
  | GeneralCompare<T>
  | BooleanCompare<T>
  | NumberCompare<T>
  | FloatCompare<T>
  | StringCompare<T>
  | ArrayCompare<T>;

/**
 * tests
 * @param fn
 * @param data
 */
const tests = <T extends (...args: any) => any>(fn: T, data: TestData<T>[]): void => {
  for (let i = 0; i < data.length; i++) {
    const { id, params, ret, mode = 'toBe' } = data[i];
    const parameters: string[] = convertStrings(params);
    const returnValue: string = convertString(ret);
    const label = ' ' + (i + 1) + (id ? ': ' + id : '');
    const description: string = [
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
