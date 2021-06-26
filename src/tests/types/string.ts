import { Common } from './common';

export type StringMode = 'toMatch' | 'not.toMatch';
export type StringCompare<T extends (...args: any) => any> = Common<T> & {
  mode: StringMode;
  ret: RegExp;
};
