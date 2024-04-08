import { Stack } from "../structures/stack.js";

export function calculateArithmeticExp(str) {
  const ops = new Stack();
  const vals = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (["(", " "].includes(str[i])) {
      continue;
    } else if (["+", "-", "*", "/"].includes(str[i])) {
      ops.push(str[i]);
    } else if (str[i] === ")") {
      const op = ops.pop();
      const val1 = vals.pop();
      const val2 = vals.pop();
      if (op === "+") {
        vals.push(val1 + val2);
      } else if (op === "-") {
        vals.push(val2 - val1);
      } else if (op === "*") {
        vals.push(val1 * val2);
      } else if (op === "/") {
        vals.push(val2 / val1);
      }
    } else {
      vals.push(Number(/\d/.test(str[i - 1]) ? vals.pop() + str[i] : str[i]));
    }
  }
  return vals.pop();
}
