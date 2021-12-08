const main = require("../src/exercise-pow");

test("test 3.1", () => {
  const x = 2.00000, n = 10;
  const expectedResult = 1024.00000;
  let result = main(x, n);
  expect(result).toEqual(expectedResult);
});

test("test 3.2", () => {
  const x = 3, n = 3;
  const expectedResult = 27;
  let result = main(x, n);
  expect(result).toEqual(expectedResult);
});

test("test 3.3", () => {
  const x = 2.00000, n = -2;
  const expectedResult = 0.25000;
  let result = main(x, n);
  expect(result).toEqual(expectedResult);
});
