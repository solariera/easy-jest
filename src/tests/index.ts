import { convertString, convertStrings } from '../convertString';

export type TestData<T extends (...args: any) => any> = {
  id?: string;
  params: [...Parameters<T>];
  ret: ReturnType<T>;
  mode?: 'toBe' | 'toEqual' | 'toStrictEqual';
};

const tests = <T extends (...args: any) => any>(fn: T, data: TestData<T>[]): void => {
  for (let i = 0; i < data.length; i++) {
    const { id, params, ret, mode } = data[i];
    const parameters: string[] = convertStrings(params);
    const returnValue: string = convertString(ret);
    const description: string = [
      ' ' + i + (id ? ': ' + id : ''),
      'test         : ' + fn.name,
      '@params      : ' + parameters.join(', '),
      '@return      : ' + returnValue,
      '',
    ].join('\n');

    if (mode === 'toStrictEqual') test(description, () => expect(fn(...params)).toStrictEqual(ret));
    if (mode === 'toEqual') test(description, () => expect(fn(...params)).toEqual(ret));
    if (mode === 'toBe' || !mode) test(description, () => expect(fn(...params)).toBe(ret));
  }
};

export { tests };
