var tape = require("tape"),
    hexEncoding = require("..");


tape("hexEncoding#stringToBytes(str)", function(assert) {
    assert.deepEqual(
        hexEncoding.stringToBytes("7468697320697320612074657374"), [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116],
        "should return string to bytes"
    );
    assert.end();
});

tape("hexEncoding#bytesToString(bytes)", function(assert) {
    assert.deepEqual(
        hexEncoding.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]),
        "7468697320697320612074657374",
        "should return bytes to string"
    );
    assert.end();
});
