import { Stack } from "./stack";

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  test("push method adds and element to the stack", () => {
    stack.push(1);
    expect(stack.elements).toEqual([1]);
  });
  test("pop method removes and returns the last element from the stack", () => {
    stack.push(1);
    stack.push(2);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(2);
    expect(stack.elements).toEqual([1]);
  });
  test("pop returns undefined if stack is empty",()=>{
    const poppedElement = stack.pop();
    expect(poppedElement).toBeUndefined();
  })
});
