var http = require('http');
var through = require('through2');

function write(buffer, encoding, next) {
  var s = buffer.toString();
  this.push(s.toUpperCase());
  next();
}

var server = http.createServer(function (req, res) {
    var stream = through(write);
    req.pipe(stream).pipe(res);
});

server.listen(process.argv[2]);
