const assert = require("assert");
const Decorator = require("../../decorator.js");

describe('Decorator', function() {
    let decorator;

    beforeEach(function() {
        decorator = new Decorator()
    });

    it("should have stock", function() {
        const actual = decorator.stock;
        assert.strictEqual(actual,);
    });
});