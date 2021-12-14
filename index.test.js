// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");

const answer = require("./answer");

describe("answer", function () {
  test("Expect answer to equal 42", function () {
    expect(answer("life")).toEqual(42);
  });

  test("Expect answer to' boredom' to equal 'code'", function () {
    expect(answer("boredom")).toEqual("code");
  });

test("Expect answer to 'stress' to equal 'rest'", function () {
    expect(answer("stress")).toEqual("rest");
  });
  
});
