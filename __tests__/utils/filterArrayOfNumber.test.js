import { filterArrayOfNumber } from '../../app/utils/filterArrayOfNumber';

test('returns a new array with elements that are greater than 2', () => {
  expect(filterArrayOfNumber([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  expect(filterArrayOfNumber([-2, -1, 0, 1, 2, 3])).toEqual([3]);
});
