// tests/calculate.test.js
const { add, multiply } = require('../src/calculate');

test('add lägger ihop två tal', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiply multiplicerar två tal', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('add hanterar negativa tal', () => {
  expect(add(-2, 3)).toBe(1);
});
