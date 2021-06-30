# Easy Jest

Easy jest package

## 1. Usage

### 1-1. Installation

```console
# npm
npm install --save-dev @solariera/easy-jest
```

```console
# yarn
yarn add --dev @solariera/easy-jest
```

### 1-2. Basic Usage

```typescript
import { tests, TestData } from '@solariera/easy-jest';
import { testFunction as fn } from './';

const data: TestData<typeof fn>[] = [
  { id: 'undefined', params: [undefined], ret: 'undefined' },
  { id: 'null', params: [null], ret: 'null' },
  { id: 'boolean - true', params: [true], ret: 'true' },
  { id: 'boolean - false', params: [false], ret: 'false' },
  { id: 'string', params: ['hogehoge'], ret: 'hogehoge' },
  { id: 'number', params: [0], ret: '0' },
  { id: 'array', params: [[0, 1, 2]], ret: '[0,1,2]', mode: 'toEqual' },
  { id: 'object', params: [{ key: 'a01', value: 1 }], ret: '{"key":"a01","value":1}' },
];

tests(fn, data);
```

### 1-3. Result

```console
  ✓  1: undefined
test         : convertString
@params      : undefined
@params type : undefined
@return      : undefined
@return type : string

  ✓  2: null
test         : convertString
@params      : null
@params type : object
@return      : null
@return type : string
```

## 2. Specifications

### 2-1. Syntax

> tests(`fn` ,`data`)

### 2-2. Parameters

| No. | Name   | Type       | Description                   |
| --- | ------ | ---------- | ----------------------------- |
| 1   | `fn`   | Function   | The function you want to test |
| 2   | `data` | TestData[] | Test data array               |

### 2-3. TestData Properties

| Name   | Type             | Default | Description                  |
| ------ | ---------------- | ------- | ---------------------------- |
| id     | string           | ""      | Test ID/Name                 |
| params | Parameters\<fn\> | -       | Parameters of test function  |
| ret    | depend on mode\* | -       | ReturnValue of test function |
| mode   | Matchers\*       | `toBe`  | Compare method               |

\* see next section

### 2-4. Matchers

| Mode (Supported Methods)                                                        | Set for 'ret' type |
| ------------------------------------------------------------------------------- | ------------------ |
| `toBe` `not.toBe` `toEqual` `not.toEqual` `toStrictEqual` `not.toStrictEqual`   | ReturnType\<fn\>   |
| `toBeNull` `toBeUndefined` `toBeDefined` `toBeTruthy` `toBeFalsy`               | undefined          |
| `toBeGreaterThan` `toBeGreaterThanOrEqual` `toBeLessThan` `toBeLessThanOrEqual` | number \| bigint   |
| `toBeCloseTo`                                                                   | number             |
| `toMatch` `not.toMatch`                                                         | RegExp             |
| `toContain` `not.toContain`                                                     | unknown            |
