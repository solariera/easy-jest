import { Common } from './common';

export type FloatMode = 'toBeCloseTo';
export type FloatCompare<T extends (...args: any) => any> = Common<T> & {
  mode: FloatMode;
  ret: number;
};
