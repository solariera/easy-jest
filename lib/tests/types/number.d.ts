import { Common } from './common';
export declare type NumberMode = 'toBeGreaterThan' | 'toBeGreaterThanOrEqual' | 'toBeLessThan' | 'toBeLessThanOrEqual';
export declare type NumberCompare<T extends (...args: any) => any> = Common<T> & {
    mode: NumberMode;
    ret: number | bigint;
};
