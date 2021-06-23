import { tests, TestData } from '../tests';
import { convertString as fn } from './';

const data: TestData<typeof fn>[] = [
  { id: '001: undefined', params: [undefined], ret: 'undefined', mode: 'toBe' },
  { id: '002: null', params: [null], ret: 'null', mode: 'toBe' },
  { id: '003: string', params: ['hogehoge'], ret: 'hogehoge', mode: 'toBe' },
  { id: '004: number - 0', params: [0], ret: '0', mode: 'toBe' },
  { id: '004: number - 1', params: [1], ret: '1', mode: 'toBe' },
];

tests(fn, data);
