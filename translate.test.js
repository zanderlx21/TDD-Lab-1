const translate = require("./translate.js");

describe ("translate", function() {
    test("change word Archiology into pig latin", function() {
        expect(translate("Archiology")).toEqual("archiologyway");
    });
    test("change word Bootcamp into pig latin", function() {
        expect(translate("Bootcamp")).toEqual("ootcampbay");
    });
});