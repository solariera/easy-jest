import { Mode } from './types/mode';
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
