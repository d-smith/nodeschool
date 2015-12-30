var through = require('through2');
var stream = through(write);

function write(buffer, encoding, next) {
  var s = buffer.toString();
  this.push(s.toUpperCase());
  next();
}

process.stdin.pipe(stream).pipe(process.stdout);
