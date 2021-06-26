import { Common } from './common';

export type NumberMode = 'toBeGreaterThan' | 'toBeGreaterThanOrEqual' | 'toBeLessThan' | 'toBeLessThanOrEqual';
export type NumberCompare<T extends (...args: any) => any> = Common<T> & {
  mode: NumberMode;
  ret: number | bigint;
};
