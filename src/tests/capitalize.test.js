const capitalize = require("../functions/capitalize");

test("check if hello sir -> HELLO SIR", () => {
  expect(capitalize("hello sir")).toBe("HELLO SIR");
});
