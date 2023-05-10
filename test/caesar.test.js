const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar() error tests", () => {
  it("returns false if the shift value is equal to 0", () => {
    const actual = caesar("Hello", 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
    const actual = caesar("a b c", 1);
    const expected = "b c d";
    expect(actual).to.equal(expected);
  });

  it("should wrap to the front of the alphabet", () => {
    const actual = caesar("z", 1);
    const expected = "a";
    expect(actual).to.equal(expected);
  });

  it("should ignore capitol letters", () => {
    const actual = caesar ("AB", 1)
    const expected = "bc"
    expect(actual).to.equal(expected)
  })
  it("should encode a message", ()=>{
    const actual = caesar("abcd", 1)
    const expected = "bcde"
    expect(actual).to.equal(expected)
  })
  it("should decode a message",()=> {
    const actual = caesar("bcde", 1, encode = false)
    const expected = "abcd"
    expect(actual).to.equal(expected)
  })
});