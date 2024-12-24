const Calculator = require("../functions/Calculator");

test("add 1 + 2 = 3", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});
test("add 1 - 2 = -1", () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
});
test("add 1 * 2 = 2", () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
});
test("add 1 / 2 = 0.5", () => {
  expect(Calculator.divide(1, 2)).toBe(0.5);
});
