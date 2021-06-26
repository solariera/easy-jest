import { tests, TestData } from '../tests';
import { convertString as fn } from '.';

const data: TestData<typeof fn>[] = [
  { params: ['no id and no mode'], ret: 'no id and no mode' },
  { id: 'undefined', params: [undefined], ret: 'undefined', mode: 'toBe' },
  { id: 'null', params: [null], ret: 'null', mode: 'toBe' },
  { id: 'boolean - true', params: [true], ret: 'true', mode: 'toBe' },
  { id: 'boolean - false', params: [false], ret: 'false', mode: 'toBe' },
  { id: 'string', params: ['hogehoge'], ret: 'hogehoge', mode: 'toBe' },
  { id: 'number - 0', params: [0], ret: '0', mode: 'toBe' },
  { id: 'number - 1', params: [1], ret: '1', mode: 'toBe' },
  { id: 'array', params: [[0, 1, 2]], ret: '[0,1,2]', mode: 'toEqual' },
  { id: 'object', params: [{ key: 'a01', value: 1 }], ret: '{"key":"a01","value":1}', mode: 'toEqual' },
];

tests(fn, data);
