import { useTemplate } from './';

test('adds 1 + 2 to equal 3', () => {
  expect(useTemplate(1, 2)).toEqual(3);
});
