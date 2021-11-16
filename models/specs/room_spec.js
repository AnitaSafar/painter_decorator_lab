const assert = require("assert");
const Room = require("../../room.js");

describe('Room', function() {
    let room;

    this.beforeEach(function() {
        room = new Room("20", false)
    });

    it("should have area", function() {
        const actual = room.area;
        assert.strictEqual(actual, "20");
    });

    it("should start not painted", function() {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

});