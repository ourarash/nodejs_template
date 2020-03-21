const assert = require("assert");
const myLib = require("../lib/my_lib.js");

// Testing HelloWorld
describe("Hello world test with Mocha", () => {
  it("should return hello world", () => {
    assert.equal(myLib.HelloWorld(), "Hello World!");
  });
});

// Testing FindMax
describe("FindMax Test with Mocha", () => {
  it("should return max", () => {
    let inputs = [1, 5, -9, 150, 3, 55, 67];
    assert.equal(myLib.FindMax(inputs), 150);
  });
});
