const capitalized = require("./task4")

test('control of "hello"', () => {
    expect(capitalized("hello")).toEqual("Hello");
  });