import { Stack } from '../src/index.js';

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("ska vara tom när den skapas", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test("ska kunna lägga till ett värde", () => {
    stack.push("A");
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe("A");
  });

  test("ska kunna ta bort det översta värdet", () => {
    stack.push("A");
    stack.push("B");
    const popped = stack.pop();
    expect(popped).toBe("B");
    expect(stack.peek()).toBe("A");
    expect(stack.size()).toBe(1);
  });
});
