// __tests__/math.test.js
const { add } = require('../math');

test('add lägger ihop två tal', () => {
  expect(add(2, 3)).toBe(5);
});
