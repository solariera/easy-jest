import { ArrayCompare } from './types/array';
import { BooleanCompare } from './types/boolean';
import { FloatCompare } from './types/float';
import { GeneralCompare } from './types/general';
import { NumberCompare } from './types/number';
import { StringCompare } from './types/string';
export declare type TestData<T extends (...args: any) => any> = GeneralCompare<T> | BooleanCompare<T> | NumberCompare<T> | FloatCompare<T> | StringCompare<T> | ArrayCompare<T>;
/**
 * tests
 * @param fn
 * @param data
 */
declare const tests: <T extends (...args: any) => any>(fn: T, data: TestData<T>[]) => void;
export { tests };
