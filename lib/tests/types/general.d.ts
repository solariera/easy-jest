import { Common } from './common';
export declare type GeneralMode = 'toBe' | 'not.toBe' | 'toEqual' | 'not.toEqual' | 'toStrictEqual' | 'not.toStrictEqual';
export declare type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
    mode?: GeneralMode;
    ret: ReturnType<T>;
};
