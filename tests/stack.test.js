const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
  expect(stack.peek()).toBeUndefined();
});

test( () => {
  stack.push('banana');
  expect(stack.peek()).toBe('banana');
});
