const main = require("../src/exercise-posibility");

test("test 2.1", () => {
  const numbers = [1, 2, 3];
  const expectedResult = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];
  let result = main(numbers);
  expect(result.toString()).toEqual(expectedResult.toString());
});

test("test 2.2", () => {
  const numbers = [0, 1];
  const expectedResult = [[0, 1], [1, 0]];
  let result = main(numbers);
  expect(result.toString()).toEqual(expectedResult.toString());
});

test("test 2.3", () => {
  const numbers = [1];
  const expectedResult = [[1]];
  let result = main(numbers);
  expect(result.toString()).toEqual(expectedResult.toString());
});

test("test 2.4", () => {
  const numbers = [5,4,6,2];
  const expectedResult = [
    [5,4,6,2],
    [5,4,2,6],
    [5,6,4,2],
    [5,6,2,4],
    [5,2,4,6],
    [5,2,6,4],
    [4,5,6,2],
    [4,5,2,6],
    [4,6,5,2],
    [4,6,2,5],
    [4,2,5,6],
    [4,2,6,5],
    [6,5,4,2],
    [6,5,2,4],
    [6,4,5,2],
    [6,4,2,5],
    [6,2,5,4],
    [6,2,4,5],
    [2,5,4,6],
    [2,5,6,4],
    [2,4,5,6],
    [2,4,6,5],
    [2,6,5,4],
    [2,6,4,5]
  ];
  let result = main(numbers);
  expect(result.toString()).toEqual(expectedResult.toString());
});
