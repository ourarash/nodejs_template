const expect = require("chai").expect;
const myLib = require("../lib/my_lib.js");

describe("Hello world test with Chai", () => {
  it("should return hello world", () => {
    expect(myLib.HelloWorld()).to.equal("Hello World!");
  });
});

describe("FindMax Test with Chai", () => {
  it("should return max", () => {
    let inputs = [1, 5, -9, 150, 3, 55, 67];
    expect(myLib.FindMax(inputs)).to.equal(150);
  });
});
