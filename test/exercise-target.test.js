const main = require("../src/exercise-target");

test("test 6.1", () => {
  const nums = [1, 3, 5, 6], target = 5;
  const expectedResult = 2;
  let result = main(nums, target);
  expect(result).toEqual(expectedResult);
});

test("test 6.2", () => {
  const nums = [1,3,5,6], target = 2;
  const expectedResult = 1;
  let result = main(nums, target);
  expect(result).toEqual(expectedResult);
});

test("test 6.3", () => {
  const nums = [1,3,5,6], target = 7;
  const expectedResult = 4;
  let result = main(nums, target);
  expect(result).toEqual(expectedResult);
});

test("test 6.4", () => {
  const nums = [6,9,10,45,78], target = 51;
  const expectedResult = 4;
  let result = main(nums, target);
  expect(result).toEqual(expectedResult);
});

test("test 6.5", () => {
  const nums = [1,3,5,6], target = 0;
  const expectedResult = 0;
  let result = main(nums, target);
  expect(result).toEqual(expectedResult);
});
