# time-since

A simple helper function that takes two millisecond timestamps and tells you the time elapsed between them in a concise, human-readable format (e.g. "About an hour ago").

## Usage

```
var getModified = require('time-elapsed');

var now = Date.now();
var fileModifiedTime = now - 60 * 60 * 1000;
console.log('File was modified ' + getModified(fileModifiedTime, now));
```

The above would output `About an hour ago`.

Tests are included.

### Licence

ISC
