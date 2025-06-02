const { shuffleArray } = require('../src/index');

test('shuffleArray should return an array with same elements', () => {
  const original = [1, 2, 3, 4];
  const result = shuffleArray([...original]);
  expect(result.sort()).toEqual(original);
});
