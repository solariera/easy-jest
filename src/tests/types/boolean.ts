import { Common } from './common';

export type BooleanMode = 'toBeNull' | 'toBeUndefined' | 'toBeDefined' | 'toBeTruthy' | 'toBeFalsy';
export type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
  mode: BooleanMode;
  ret?: undefined;
};
