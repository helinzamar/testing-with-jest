let stack = [];

function push(element) {
  stack.push(element);
  return stack;
}

function pop() {
  return stack.pop();
}

function peek() {
  return stack[stack.length - 1];
}

function getStack() {
  return stack;
}

function clear() {
  stack = [];
}

export { push, pop, peek, getStack, clear };
