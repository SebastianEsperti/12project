const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe("substitution() function tests", () => {
  const fakeAlphabet = "zyxwvutsrqponmlkjihgfedcba"
  const shortFakeAlphabet = "mlo";
  const fakeAlphabetDuplicate = "zzzwvutsrqponmlkjihgfedcba"

  it("should return false if alphabet is less than 26 characters", () => {
    const actual = substitution("abc", shortFakeAlphabet)
    expect(actual).to.be.false;
  })
  it("should not include duplicates in the alphabet",()=> {
    const actual = substitution("abc",fakeAlphabetDuplicate)
    expect(actual).to.be.false
  })
  it("should maintain spaces",()=>{
    const actual = substitution("a b c", fakeAlphabet)
    const expected = "z y x"
    expect(actual).to.equal(expected)
  })
  it("should decode a message",()=>{
    const actual = substitution("zyx",fakeAlphabet, encode=false)
    const expected = "abc"
    expect(actual).to.equal(expected)
  })
})