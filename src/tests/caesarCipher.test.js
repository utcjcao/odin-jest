const caesarCipher = require("../functions/caesarCipher");

test("shift aAbBcC to cCdDeE by shifting by 2", () => {
  expect(caesarCipher("aAbBcC", 2)).toBe("cCdDeE");
});
