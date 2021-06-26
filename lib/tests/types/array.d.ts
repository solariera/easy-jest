import { Common } from './common';
export declare type ArrayMode = 'toContain' | 'not.toContain';
export declare type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
    mode: ArrayMode;
    ret: unknown;
};
