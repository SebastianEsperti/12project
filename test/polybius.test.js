const expect = require("chai").expect
const { polybius } = require("../src/polybius")

describe("polybius() function tests", () => {
    it("should decode a message", ()=> {
        const actual = polybius("44513444", encode = false)
        const expected = "test"
        expect(actual).to.equal(expected)
    })
    it("should encode a message", ()=> {
        const actual = polybius("test")
        const expected = "44513444"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces", ()=>{
        const actual = polybius("te st")
        const expected = "4451 3444"
        expect(actual).to.equal(expected)
    })
    it("should ignore capitol letters", ()=> {
        const actual = polybius("TEST")
        const expected = "44513444"
        expect(actual).to.equal(expected)
    })
    it("should convert 42 to i/j", ()=> {
        const actual = polybius("42", encode = false)
        const expected = "(i/j)"
        expect(actual).to.equal(expected)
    })

})
