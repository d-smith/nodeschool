var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp){
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(resp);
});

server.listen(parseInt(process.argv[2]));
