import { convertString, convertStrings } from '../convert-string';

export type TestData<T extends (...args: any) => any> =
  | GeneralCompare<T>
  | BooleanCompare<T>
  | NumberCompare<T>
  | FloatCompare<T>
  | StringCompare<T>
  | ArrayCompare<T>
  | ThrowCompare<T>;

type Common<T extends (...args: any) => any> = {
  id?: string;
  params: [...Parameters<T>];
};

const generalMode = ['toBe', 'not.toBe', 'toEqual', 'not.toEqual'] as const;
const booleanMode = ['toBeNull', 'toBeUndefined', 'toBeDefined', 'toBeTruthy', 'toBeFalsy'] as const;
const numberMode = ['toBeGreaterThan', 'toBeGreaterThanOrEqual', 'toBeLessThan', 'toBeLessThanOrEqual'] as const;
const floatMode = ['toBeCloseTo'];
const stringMode = ['toMatch', 'not.toMatch'] as const;
const arrayMode = ['toContain', 'not.toContain'] as const;
const throwMode = ['toThrow', 'not.toThrow'] as const;

type GeneralMode = typeof generalMode[number];
type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
  mode?: GeneralMode;
  ret: ReturnType<T>;
};

type BooleanMode = typeof booleanMode[number];
type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
  mode: BooleanMode;
  ret?: undefined;
};

type NumberMode = typeof numberMode[number];
type NumberCompare<T extends (...args: any) => any> = Common<T> & {
  mode: NumberMode;
  ret: number | bigint;
};

type FloatMode = typeof floatMode[number];
type FloatCompare<T extends (...args: any) => any> = Common<T> & {
  mode: FloatMode;
  ret: number;
};

type StringMode = typeof stringMode[number];
type StringCompare<T extends (...args: any) => any> = Common<T> & {
  mode: StringMode;
  ret: RegExp;
};

type ArrayMode = typeof arrayMode[number];
type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
  mode: ArrayMode;
  ret: unknown;
};

type ThrowMode = typeof throwMode[number];
type ThrowCompare<T extends (...args: any) => any> = Common<T> & {
  mode: ThrowMode;
  ret: string | RegExp;
};

const tests = <T extends (...args: any) => any>(fn: T, data: TestData<T>[]): void => {
  for (let i = 0; i < data.length; i++) {
    const { id, params, ret, mode } = data[i];
    const parametersStrings: string[] = convertStrings(params);
    const returnValueString: string = convertString(ret);
    const label = ' ' + (i + 1) + (id ? ': ' + id : '');
    const description: string = [
      label,
      'test         : ' + fn.name,
      'compare mode : ' + mode,
      '@params      : ' + parametersStrings.join(', '),
      '@params type : ' + params.map((param) => typeof param).join(', '),
      '@return      : ' + returnValueString,
      '@return type : ' + typeof ret,
      '',
    ].join('\n');

    if (mode && numberMode.some((value) => value === mode)) {
      const value = ret as number | bigint;
      if (mode === 'toBeGreaterThan') {
        test(description, () => expect(fn(...params)).toBeGreaterThan(value));
        continue;
      }

      if (mode === 'toBeGreaterThanOrEqual') {
        test(description, () => expect(fn(...params)).toBeGreaterThanOrEqual(value));
        continue;
      }

      if (mode === 'toBeLessThan') {
        test(description, () => expect(fn(...params)).toBeLessThan(value));
        continue;
      }

      if (mode === 'toBeLessThanOrEqual') {
        test(description, () => expect(fn(...params)).toBeLessThanOrEqual(value));
        continue;
      }
    }

    if (mode && floatMode.some((value) => value === mode)) {
      const value = ret as number;
      if (mode === 'toBeCloseTo') {
        test(description, () => expect(fn(...params)).toBeCloseTo(value));
        continue;
      }
    }

    if (mode && stringMode.some((value) => value === mode)) {
      const value = ret as RegExp;
      if (mode === 'toMatch') {
        test(description, () => expect(fn(...params)).toMatch(value));
        continue;
      }

      if (mode === 'not.toMatch') {
        test(description, () => expect(fn(...params)).not.toMatch(value));
        continue;
      }
    }

    if (mode && throwMode.some((value) => value === mode)) {
      const value = ret as string | RegExp;
      if (mode === 'toThrow') {
        test(description, () => expect(fn(...params)).toThrow(value));
        continue;
      }

      if (mode === 'not.toThrow') {
        test(description, () => expect(fn(...params)).not.toThrow(value));
        continue;
      }
    }

    if (mode === 'toBeNull') {
      test(description, () => expect(fn(...params)).toBeNull());
      continue;
    }

    if (mode === 'toBeUndefined') {
      test(description, () => expect(fn(...params)).toBeUndefined());
      continue;
    }

    if (mode === 'toBeDefined') {
      test(description, () => expect(fn(...params)).toBeDefined());
      continue;
    }

    if (mode === 'toBeTruthy') {
      test(description, () => expect(fn(...params)).toBeTruthy());
      continue;
    }

    if (mode === 'toBeFalsy') {
      test(description, () => expect(fn(...params)).toBeFalsy());
      continue;
    }

    if (mode === 'toContain') {
      test(description, () => expect(fn(...params)).toContain(ret));
      continue;
    }
    if (mode === 'not.toContain') {
      test(description, () => expect(fn(...params)).not.toContain(ret));
      continue;
    }

    if (mode === 'toBe') {
      test(description, () => expect(fn(...params)).toBe(ret));
      continue;
    }

    if (mode === 'not.toBe') {
      test(description, () => expect(fn(...params)).not.toBe(ret));
      continue;
    }

    if (mode === 'toEqual') {
      test(description, () => expect(fn(...params)).toEqual(ret));
      continue;
    }

    if (mode === 'not.toEqual') {
      test(description, () => expect(fn(...params)).not.toEqual(ret));
      continue;
    }

    test(description, () => expect(fn(...params)).toBe(ret));
  }
};

export { tests };
