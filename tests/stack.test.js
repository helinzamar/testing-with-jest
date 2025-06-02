const stack = require('../src/stack');

test( () => {
  expect(stack.peek()).toBeUndefined();
});

test( () => {
  stack.push('banana');
  expect(stack.peek()).toBe('banana');
});
