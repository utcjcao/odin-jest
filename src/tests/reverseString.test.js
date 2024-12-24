const reverseString = require("../functions/reverseString");

test("check if hello sir -> ris olleh", () => {
  expect(reverseString("hello sir")).toBe("ris olleh");
});
