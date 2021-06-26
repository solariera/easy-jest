export declare type TestData<T extends (...args: any) => any> = GeneralCompare<T> | BooleanCompare<T> | NumberCompare<T> | FloatCompare<T> | StringCompare<T> | ArrayCompare<T> | ThrowCompare<T>;
declare type Common<T extends (...args: any) => any> = {
    id?: string;
    params: [...Parameters<T>];
};
declare const generalMode: readonly ["toBe", "not.toBe", "toEqual", "not.toEqual"];
declare const booleanMode: readonly ["toBeNull", "toBeUndefined", "toBeDefined", "toBeTruthy", "toBeFalsy"];
declare const numberMode: readonly ["toBeGreaterThan", "toBeGreaterThanOrEqual", "toBeLessThan", "toBeLessThanOrEqual"];
declare const floatMode: string[];
declare const stringMode: readonly ["toMatch", "not.toMatch"];
declare const arrayMode: readonly ["toContain", "not.toContain"];
declare const throwMode: readonly ["toThrow", "not.toThrow"];
declare type GeneralMode = typeof generalMode[number];
declare type GeneralCompare<T extends (...args: any) => any> = Common<T> & {
    mode?: GeneralMode;
    ret: ReturnType<T>;
};
declare type BooleanMode = typeof booleanMode[number];
declare type BooleanCompare<T extends (...args: any) => any> = Common<T> & {
    mode: BooleanMode;
    ret?: undefined;
};
declare type NumberMode = typeof numberMode[number];
declare type NumberCompare<T extends (...args: any) => any> = Common<T> & {
    mode: NumberMode;
    ret: number | bigint;
};
declare type FloatMode = typeof floatMode[number];
declare type FloatCompare<T extends (...args: any) => any> = Common<T> & {
    mode: FloatMode;
    ret: number;
};
declare type StringMode = typeof stringMode[number];
declare type StringCompare<T extends (...args: any) => any> = Common<T> & {
    mode: StringMode;
    ret: RegExp;
};
declare type ArrayMode = typeof arrayMode[number];
declare type ArrayCompare<T extends (...args: any) => any> = Common<T> & {
    mode: ArrayMode;
    ret: unknown;
};
declare type ThrowMode = typeof throwMode[number];
declare type ThrowCompare<T extends (...args: any) => any> = Common<T> & {
    mode: ThrowMode;
    ret: string | RegExp;
};
declare const tests: <T extends (...args: any) => any>(fn: T, data: TestData<T>[]) => void;
export { tests };
