import { Common } from './common';
export declare type StringMode = 'toMatch' | 'not.toMatch';
export declare type StringCompare<T extends (...args: any) => any> = Common<T> & {
    mode: StringMode;
    ret: RegExp;
};
