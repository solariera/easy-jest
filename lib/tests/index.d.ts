export declare type TestData<T extends (...args: any) => any> = {
    id?: string;
    params: [...Parameters<T>];
    ret: ReturnType<T>;
    mode?: 'toBe' | 'toEqual' | 'toStrictEqual';
};
declare const tests: <T extends (...args: any) => any>(fn: T, data: TestData<T>[]) => void;
export { tests };
