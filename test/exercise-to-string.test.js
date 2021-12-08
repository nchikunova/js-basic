const main = require("../src/exercise-to-string");

test("test 5.1", () => {
  let result = main({ a: 5, b: {c: "text", l: { j: "some"}} });
  expect(result).toEqual("{ a: 5, b: { c: text, l: { j: some } } }");
});

test("test 5.2", () => {
  let result = main({ test: 23 });
  expect(result).toEqual("{ test: 23 }");
});

test("test 5.3", () => {
  let result = main({});
  expect(result).toEqual("{}");
});

