const stringLength = require("./task1");

test('length of "hello"', () => {
  expect(stringLength("hello")).toBe(5);
});

// test('length of "what is your name?"', () => {
//   expect(stringLength("what is your name?")).toBe(18);
// });

test('length of "what is your name?"2', () => {
  expect(() => {
    stringLength("what is your name?");
  }).toThrow();
});
