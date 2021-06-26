import { ArrayCompare } from './ut';
import { BooleanCompare } from './ut';
import { FloatCompare } from './ut';
import { GeneralCompare } from './ut';
import { NumberCompare } from './ut';
import { StringCompare } from './ut';
export declare type TestData<T extends (...args: any) => any> = GeneralCompare<T> | BooleanCompare<T> | NumberCompare<T> | FloatCompare<T> | StringCompare<T> | ArrayCompare<T>;
/**
 * tests
 * @param fn
 * @param data
 */
declare const tests: <T extends (...args: any) => any>(fn: T, data: TestData<T>[]) => void;
export { tests };
