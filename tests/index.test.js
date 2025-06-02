const { shuffleArray } = require('../src/index');

test( () => {
  const original = [1, 2, 3, 4];
  const result = shuffleArray([...original]);
  expect(result.sort()).toEqual(original);
});
