
There are four fundamental stream types in Node.js: Readable, Writable, Duplex, and Transform streams.

* A readable stream is an abstraction for a source from which data can be consumed. An example of that is the fs.createReadStream method.

* A writable stream is an abstraction for a destination to which data can be written. An example of that is the fs.createWriteStream method.

* A duplex streams is both Readable and Writable. An example of that is a TCP socket.

* A transform stream is basically a duplex stream that can be used to modify or transform the data as it is written and read. An example of that is the zlib.createGzip stream to compress the data using gzip. You can think of a transform stream as a function where the input is the writable stream part and the output is readable stream part. You might also hear transform streams referred to as “through streams.”

The most important events on a readable stream are:
* The data event, which is emitted whenever the stream passes a chunk of data to the consumer

* The end event, which is emitted when there is no more data to be consumed from the stream.

The most important events on a writable stream are:

* The drain event, which is a signal that the writable stream can receive more data.

* The finish event, which is emitted when all data has been flushed to the underlying system.

Two different ways of reading streams:
* Listening to data event and attaching a callback
```
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';

readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});
```

* Calling read() on the stream until every chunk of data read

```
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';
var chunk;

readableStream.on('readable', function() {
    while ((chunk=readableStream.read()) != null) {
        data += chunk;
    }
});

readableStream.on('end', function() {
    console.log(data)
});
```

### Buffers

### What Are Buffers?

Buffers are instances of the Buffer class in node, which is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data. In addition, the "integers" in a buffer each represent a byte and so are limited to values from 0 to 255 (2^8 - 1), inclusive.

### Where You See Buffers:

In the wild, buffers are usually seen in the context of binary data coming from streams, such as fs.createReadStream.

## Useful links

https://www.codementor.io/davidgatti/understanding-streams-in-node-js-weupiug0a

https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93

https://www.sitepoint.com/basics-node-js-streams/

https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/

https://nelsonic.gitbooks.io/node-js-by-example/content/core/buffer/README.html
