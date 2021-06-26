import { Common } from './common';
export declare type FloatMode = 'toBeCloseTo';
export declare type FloatCompare<T extends (...args: any) => any> = Common<T> & {
    mode: FloatMode;
    ret: number;
};
