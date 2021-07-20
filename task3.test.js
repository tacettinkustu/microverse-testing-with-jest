const Calculator = require("./task3");

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 3, expected: 5 },
])(".add($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(Calculator.add(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.add(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.add(a, b)).toBe(expected);
  });
});

describe.each([
  { a: 1, b: 1, expected: 0 },
  { a: 5, b: 2, expected: 3 },
  { a: 8, b: 3, expected: 5 },
])(".subtract($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(Calculator.subtract(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.subtract(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.subtract(a, b)).toBe(expected);
  });
});

describe.each([
  { a: 1, b: 1, expected: 1 },
  { a: 6, b: 2, expected: 3 },
  { a: 15, b: 3, expected: 5 },
])(".divide($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(Calculator.divide(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.divide(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.divide(a, b)).toBe(expected);
  });
});

describe.each([
  { a: 1, b: 1, expected: 1 },
  { a: 6, b: 2, expected: 12 },
  { a: 15, b: 3, expected: 45 },
])(".multiply($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(Calculator.multiply(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.multiply(a, b)).toBe(expected);
  });

  test(`returns ${expected}`, () => {
    expect(Calculator.multiply(a, b)).toBe(expected);
  });
});
