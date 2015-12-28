var http = require('http');
var url = require('url');

function makeDateResp(date) {
  return {
    'hour': date.getHours(),
    'minute' : date.getMinutes(),
    'second' : date.getSeconds()
  }
}

function serveParseTime(parsed, req, resp) {
  var date = new Date(parsed.query.iso);
  resp.setHeader('content-type','application/json');
  resp.end(JSON.stringify(makeDateResp(date)));
}

function serveUnixtime(parsed,req, resp) {
  var date = new Date(parsed.query.iso);
  resp.setHeader('content-type','application/json');
  resp.end(JSON.stringify({'unixtime':date.getTime()}));
}


function serverHttp(req, resp) {
  parsed = url.parse(req.url,true);
  if(parsed.pathname === '/api/parsetime') {
    serveParseTime(parsed,req,resp);
  } else if(parsed.pathname === '/api/unixtime') {
    serveUnixtime(parsed,req, resp);
  } else {
    resp.statusCode = 404;
    resp.end('Not found\n');
  }
}

var server = http.createServer(serverHttp);
server.listen(parseInt(process.argv[2]));
