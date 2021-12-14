// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
// const { describe } = require("yargs");
const what2Wear = require("./what2Wear.js");

describe("what2Wear", function(){
    test("If the event is casual 50 degrees", function() {
        expect(what2Wear("casual", 50)).toEqual("Since it is 50 degrees and you are going to a casual event, you should wear something comfy and a coat");                                     
    });

    test("If the event is formal 65 degrees", function() {
        expect(what2Wear("formal", 65)).toEqual("Since it is 65 degrees and you are going to a formal event, you should wear a suit and a jacket");
    });

    test("If the event is semi-formal 75 degrees", function() {
        expect(what2Wear("semi-formal", 75)).toEqual("Since it is 75 degrees and you are going to a semi-formal event, you should wear a polo and no jacket");
    });
});