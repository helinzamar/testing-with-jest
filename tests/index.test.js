import { shuffleArray } from '../src/index';

test('shuffleArray returns a new array with same elements', () => {
  const original = [1, 2, 3, 4, 5];
  const result = shuffleArray(original);
  
  expect(result).toHaveLength(original.length);
  expect(result).toEqual(expect.arrayContaining(original));
});
