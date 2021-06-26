import { Common } from './common';

export type ArrayMode = 'toContain' | 'not.toContain';
export type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
  mode: ArrayMode;
  ret: unknown;
};
