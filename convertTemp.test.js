// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
// const { expect } = require("@jest/globals");
// const { expect } = require("@jest/globals");
const convertTemp = require("./convertTemp.js");

describe("convertTemp", function(){
    test("converts from 32F", function() {
        expect(convertTemp(32, "F")).toEqual(0);
    });
    test ("converts from 68F", function() {
        expect(convertTemp(68, "F")).toEqual(20);
    });
    test ("converts from 100C", function() {
        expect(convertTemp(100, "C")).toEqual(212);
    });
    test ("converts from -40C", function() {
        expect(convertTemp(-40, "C")).toEqual(-40, "C");
    });
});