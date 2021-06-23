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
      ' ' + id || '',
      'test         : ' + fn.name,
      '@params      : ' + parameters.join(', '),
      '@return      : ' + returnValue,
      '',
    ].join('\n');

    if (mode === 'toBe') test(description, () => expect(fn(...params)).toBe(ret));
    if (mode === 'toStrictEqual') test(description, () => expect(fn(...params)).toStrictEqual(ret));
    if (mode === 'toEqual' || mode === undefined) test(description, () => expect(fn(...params)).toEqual(ret));
  }
};

export { tests };
