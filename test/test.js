var assert = require("assert"),
    hex = require("../src/index");

console.log(hex);

describe("bin_encoding", function() {
    describe("#stringToBytes(str)", function() {
        it("should return string to bytes", function() {
            assert.deepEqual(
                hex.stringToBytes("7468697320697320612074657374"), [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]
            );
        });
    });
    describe("#bytesToString(bytes)", function() {
        it("should return bytes to string", function() {
            assert.deepEqual(
                hex.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]),
                "7468697320697320612074657374"
            );
        });
    });
});
