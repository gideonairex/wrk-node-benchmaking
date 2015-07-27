# wrk-node-benchmaking
Wrk node.js http benchmarking tool. A framework wrapper for wrk benchmarking. Instead if globally running it. This will be implemented in gulp task runners.

# Run
```javascript
./node_modules/.bin/wrk <options> <url>
```

# Usage
```javascript
'use strict';
var exec = require( 'child_process' ).exec;

exec( './node_modules/.bin/wrk -t 1 -d 1 -c 1 http://www.google.com', function ( err, stdout, stderr ) {
  // Do something with results
} );
```

# Update version
Currently this repo uses 4.0.0. This command updates your own version of wrk.
```
make install VERSION=<wrk-version>
```

# Clean up
```
make clean
```
