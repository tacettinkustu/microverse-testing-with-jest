const reverseString = require("./task2");

test('reverse of "hello"', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('reverse of "what"', () => {
    expect(reverseString("what")).toBe("tahw");
  });