declare type Common<T extends (...args: any) => any> = {
    id?: string;
    params: [...Parameters<T>];
};
declare type ArrayMode = 'toContain' | 'not.toContain';
export declare type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
    mode: ArrayMode;
    ret: unknown;
};
declare type BooleanMode = 'toBeNull' | 'toBeUndefined' | 'toBeDefined' | 'toBeTruthy' | 'toBeFalsy';
export declare type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
    mode: BooleanMode;
    ret?: undefined;
};
declare type FloatMode = 'toBeCloseTo';
export declare type FloatCompare<T extends (...args: any) => any> = Common<T> & {
    mode: FloatMode;
    ret: number;
};
declare type GeneralMode = 'toBe' | 'not.toBe' | 'toEqual' | 'not.toEqual';
export declare type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
    mode?: GeneralMode;
    ret: ReturnType<T>;
};
declare type NumberMode = 'toBeGreaterThan' | 'toBeGreaterThanOrEqual' | 'toBeLessThan' | 'toBeLessThanOrEqual';
export declare type NumberCompare<T extends (...args: any) => any> = Common<T> & {
    mode: NumberMode;
    ret: number | bigint;
};
declare type StringMode = 'toMatch' | 'not.toMatch';
export declare type StringCompare<T extends (...args: any) => any> = Common<T> & {
    mode: StringMode;
    ret: RegExp;
};
declare type Mode = ArrayMode | BooleanMode | FloatMode | GeneralMode | NumberMode | StringMode;
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
declare const ut: <T extends (...args: any) => any>(fn: T, description: string, params: [...Parameters<T>], mode?: Mode | undefined, ret?: unknown) => void;
export { ut };
