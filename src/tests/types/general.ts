import { Common } from './common';

export type GeneralMode = 'toBe' | 'not.toBe' | 'toEqual' | 'not.toEqual' | 'toStrictEqual' | 'not.toStrictEqual';
export type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
  mode?: GeneralMode;
  ret: ReturnType<T>;
};
