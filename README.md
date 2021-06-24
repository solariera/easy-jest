# Easy Jest Tool

Easy jest package with convertString(s)

## 1. Common

### Installation

```console
# npm
npm -i -D @solariera/easy-jest
```

```console
# yarn
yarn add -D @solariera/easy-jest
```

## 2. Easy Jest

### Usage : tests

```typescript
import { tests, TestData } from '@solariera/easy-jest';
import { someFunction as fn } from './';

const data: TestData<typeof fn>[] = [
  { id: 'undefined', params: [undefined], ret: 'undefined', mode: 'toBe' },
  { id: 'null', params: [null], ret: 'null', mode: 'toBe' },
  { id: 'string', params: ['hogehoge'], ret: 'hogehoge', mode: 'toBe' },
  { id: 'number - 0', params: [0], ret: '0', mode: 'toBe' },
  { id: 'number - 1', params: [1], ret: '1', mode: 'toBe' },
];

tests(fn, data);
```

### TestData Properties

| Name   | Type             | Default | Description                     |
| ------ | ---------------- | ------- | ------------------------------- |
| id     | string           | ""      | Test ID/Name                    |
| params | Parameters\<fn\> | -       | Parameters of testing function  |
| ret    | ReturnType\<fn\> | -       | ReturnValue of testing function |
| mode   | Matchers\*       | toBe    | Compare method                  |

\* Current supported methods: `toBe` `toEqual` `toStrictEqual`

## 3. Convert String(s)

### Usage : convertString / convertStrings

```typescript
import { convertString, convertStrings } from '@solariera/easy-jest/convertString';

console.log(convertString(null)); // 'null'
console.log(convertString(false)); // 'false'
console.log(convertString([null, undefined, 1])); // '["null", "undefined", "1"]'
console.log(convertStrings([null, undefined, 1])); // ['null', 'undefined', '1']
```
