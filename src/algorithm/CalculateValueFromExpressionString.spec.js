import { calculateArithmeticExp } from "../algorithm/CalculateValueFromExpressionString";

describe("calculateArithemeticExp", () => {
  test("handle simple addition", () => {
    expect(calculateArithmeticExp("(1+2)")).toBe(3);
  });

  test("handle simple subtraction", () => {
    expect(calculateArithmeticExp("(5-2)")).toBe(3);
  });
  test("handle simple multiplication", () => {
    expect(calculateArithmeticExp("(3*3)")).toBe(9);
  });
  test("handle simple division", () => {
    expect(calculateArithmeticExp("(6/2)")).toBe(3);
  });
  test("handle multiple nested operations", () => {
    expect(calculateArithmeticExp("((1+2)+(5-2))")).toBe(6);
  });
  test("handle complex operations", () => {
    expect(calculateArithmeticExp("(((1+2)+(5-2))*(6/3))")).toBe(12);
  });
});
