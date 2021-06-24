import { tests, TestData } from '../tests';
import { convertString as fn } from './';

const data: TestData<typeof fn>[] = [
  { id: 'undefined', params: [undefined], ret: 'undefined', mode: 'toBe' },
  { id: 'null', params: [null], ret: 'null', mode: 'toBe' },
  { id: 'string', params: ['hogehoge'], ret: 'hogehoge', mode: 'toBe' },
  { id: 'number - 0', params: [0], ret: '0', mode: 'toBe' },
  { id: 'number - 1', params: [1], ret: '1', mode: 'toBe' },
];

tests(fn, data);
