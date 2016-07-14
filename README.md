hex encoding
=======

hex encoding/decoding for the browser and node.js

```javascript
var hex = require("hex_encoding");


hexEncoding.stringToBytes(
    "7468697320697320612074657374"
) === [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116];

hexEncoding.bytesToString(
    [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]
) === "7468697320697320612074657374";
```
