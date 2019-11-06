const assert = require("chai").assert;
const index = require("../index.js")

//testing the function
describe("tax calculate" , () => {
	it("Checking for functionality", () => {
		assert.equal(index(450000),262263)
	})
})