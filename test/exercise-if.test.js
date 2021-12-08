const main = require("../src/exercise-if");

test("test 4.1", () => {
  let result = main(2 < 10, () => 2, () => 3);
  expect(result).toEqual(2);
});

test("test 4.2", () => {
  let result = main(false, () => true, () => false);
  expect(result).toEqual(false);
});

test("test 4.3", () => {
  let result = main(true, () => "OK", () => "Bad");
  expect(result).toEqual("OK");
});

