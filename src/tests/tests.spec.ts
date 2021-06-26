import { tests, TestData } from '.';

type Options = { number?: number; string?: string; regexp?: RegExp; array?: unknown[] };
const fn = (situation: string, option?: Options) => {
  if (situation === 'undefined') return undefined;
  if (situation === 'null') return null;
  if (situation === 'truthy') return 'yes';
  if (situation === 'falsy') return 0;
  if (situation === 'number') return option?.number;
  if (situation === 'string') return option?.string;
  if (situation === 'regexp') return option?.regexp;
  if (situation === 'array') return option?.array;
};

const data: TestData<typeof fn>[] = [
  { mode: 'toBeDefined', params: ['null'] },
  { id: 'toBeNull', mode: 'toBeNull', params: ['null'] },
  { id: 'toBeUndefined', mode: 'toBeUndefined', params: ['undefined'] },
  { id: 'toBeTruthy', mode: 'toBeTruthy', params: ['truthy'] },
  { id: 'toBeFalsy', mode: 'toBeFalsy', params: ['falsy'] },
  { id: 'toBeGreaterThan', mode: 'toBeGreaterThan', params: ['number', { number: 1 }], ret: 0 },
  { id: 'toBeGreaterThanOrEqual', mode: 'toBeGreaterThanOrEqual', params: ['number', { number: 1 }], ret: 1 },
  { id: 'toBeLessThan', mode: 'toBeLessThan', params: ['number', { number: 0 }], ret: 1 },
  { id: 'toBeLessThanOrEqual', mode: 'toBeLessThanOrEqual', params: ['number', { number: 1 }], ret: 1 },
  { id: 'toBeCloseTo', mode: 'toBeCloseTo', params: ['number', { number: 1.11111 }], ret: 1.11111 },
  { id: 'toMatch', mode: 'toMatch', params: ['string', { string: 'hello world' }], ret: /o w/ },
  { id: 'not.toMatch', mode: 'not.toMatch', params: ['string', { string: 'hello world' }], ret: /bye/ },
  { id: 'toContain', mode: 'toContain', params: ['array', { array: ['hoge', 'fuga'] }], ret: 'fuga' },
  { id: 'not.toContain', mode: 'not.toContain', params: ['array', { array: ['hoge', 'fuga'] }], ret: 'foga' },
];

tests(fn, data);
