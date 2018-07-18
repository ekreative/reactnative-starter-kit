import { filterArrayOfNumber } from '../app/utils/filterArrayOfNumber'

test('filterArray should return array of elements greater than 2', () => {
  expect(filterArrayOfNumber([2, 2, 2, 2])).toEqual([])
  expect(filterArrayOfNumber([2, 3, 2, 3])).toEqual([3, 3])
  expect(filterArrayOfNumber([])).toEqual([])
})
