import { convertString, convertStrings } from '../convert-string';
import { ut } from './ut';

export type TestData<T extends (...args: any) => any> =
  | GeneralCompare<T>
  | BooleanCompare<T>
  | NumberCompare<T>
  | FloatCompare<T>
  | StringCompare<T>
  | ArrayCompare<T>;

type Common<T extends (...args: any) => any> = {
  id?: string;
  params: [...Parameters<T>];
};

type GeneralMode = 'toBe' | 'not.toBe' | 'toEqual' | 'not.toEqual';
type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
  mode?: GeneralMode;
  ret: ReturnType<T>;
};

type BooleanMode = 'toBeNull' | 'toBeUndefined' | 'toBeDefined' | 'toBeTruthy' | 'toBeFalsy';
type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
  mode: BooleanMode;
  ret?: undefined;
};

type NumberMode = 'toBeGreaterThan' | 'toBeGreaterThanOrEqual' | 'toBeLessThan' | 'toBeLessThanOrEqual';
type NumberCompare<T extends (...args: any) => any> = Common<T> & {
  mode: NumberMode;
  ret: number | bigint;
};

type FloatMode = 'toBeCloseTo';
type FloatCompare<T extends (...args: any) => any> = Common<T> & {
  mode: FloatMode;
  ret: number;
};

type StringMode = 'toMatch' | 'not.toMatch';
type StringCompare<T extends (...args: any) => any> = Common<T> & {
  mode: StringMode;
  ret: RegExp;
};

type ArrayMode = 'toContain' | 'not.toContain';
type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
  mode: ArrayMode;
  ret: unknown;
};

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

    ut<T>(fn, description, params, mode, ret);
  }
};

export { tests };
