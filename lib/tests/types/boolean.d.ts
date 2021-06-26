import { Common } from './common';
export declare type BooleanMode = 'toBeNull' | 'toBeUndefined' | 'toBeDefined' | 'toBeTruthy' | 'toBeFalsy';
export declare type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
    mode: BooleanMode;
    ret?: undefined;
};
