type Common<T extends (...args: any) => any> = {
  id?: string;
  params: [...Parameters<T>];
};

type ArrayMode = 'toContain' | 'not.toContain';
export type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
  mode: ArrayMode;
  ret: unknown;
};

type BooleanMode = 'toBeNull' | 'toBeUndefined' | 'toBeDefined' | 'toBeTruthy' | 'toBeFalsy';
export type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
  mode: BooleanMode;
  ret?: undefined;
};

type FloatMode = 'toBeCloseTo';
export type FloatCompare<T extends (...args: any) => any> = Common<T> & {
  mode: FloatMode;
  ret: number;
};

type GeneralMode = 'toBe' | 'not.toBe' | 'toEqual' | 'not.toEqual';
export type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
  mode?: GeneralMode;
  ret: ReturnType<T>;
};

type NumberMode = 'toBeGreaterThan' | 'toBeGreaterThanOrEqual' | 'toBeLessThan' | 'toBeLessThanOrEqual';
export type NumberCompare<T extends (...args: any) => any> = Common<T> & {
  mode: NumberMode;
  ret: number | bigint;
};

type StringMode = 'toMatch' | 'not.toMatch';
export type StringCompare<T extends (...args: any) => any> = Common<T> & {
  mode: StringMode;
  ret: RegExp;
};

type Mode = ArrayMode | BooleanMode | FloatMode | GeneralMode | NumberMode | StringMode;

/**
 * ut
 * @see https://doc.ebichu.cc/jest/docs/ja/using-matchers.html
 * @param fn
 * @param description
 * @param params
 * @param mode
 * @param ret
 * @returns
 */
const ut = <T extends (...args: any) => any>(
  fn: T,
  description: string,
  params: [...Parameters<T>],
  mode?: Mode,
  ret?: unknown,
): void => {
  switch (mode) {
    case 'toBeGreaterThan':
      return test(description, () => expect(fn(...params)).toBeGreaterThan(ret as number | bigint));

    case 'toBeGreaterThanOrEqual':
      return test(description, () => expect(fn(...params)).toBeGreaterThanOrEqual(ret as number | bigint));

    case 'toBeLessThan':
      return test(description, () => expect(fn(...params)).toBeLessThan(ret as number | bigint));

    case 'toBeLessThanOrEqual':
      return test(description, () => expect(fn(...params)).toBeLessThanOrEqual(ret as number | bigint));

    case 'toBeCloseTo':
      return test(description, () => expect(fn(...params)).toBeCloseTo(ret as number));

    case 'toMatch':
      return test(description, () => expect(fn(...params)).toMatch(ret as RegExp));

    case 'not.toMatch':
      return test(description, () => expect(fn(...params)).not.toMatch(ret as RegExp));

    case 'toBeNull':
      return test(description, () => expect(fn(...params)).toBeNull());

    case 'toBeUndefined':
      return test(description, () => expect(fn(...params)).toBeUndefined());

    case 'toBeDefined':
      return test(description, () => expect(fn(...params)).toBeDefined());

    case 'toBeTruthy':
      return test(description, () => expect(fn(...params)).toBeTruthy());

    case 'toBeFalsy':
      return test(description, () => expect(fn(...params)).toBeFalsy());

    case 'toContain':
      return test(description, () => expect(fn(...params)).toContain(ret));

    case 'not.toContain':
      return test(description, () => expect(fn(...params)).not.toContain(ret));

    case 'toBe':
      return test(description, () => expect(fn(...params)).toBe(ret));

    case 'not.toBe':
      return test(description, () => expect(fn(...params)).not.toBe(ret));

    case 'toEqual':
      return test(description, () => expect(fn(...params)).toEqual(ret));

    case 'not.toEqual':
      return test(description, () => expect(fn(...params)).not.toEqual(ret));
  }
};

export { ut };
