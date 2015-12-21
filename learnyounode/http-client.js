http = require('http');

if(process.argv.length != 3) {
  console.log("Usage: node http-client.js <url>");
  return;
}

http.get(process.argv[2], function(resp){
  resp.setEncoding('utf8');

  resp.on('data', function(chunk){
    console.log(chunk);
  });

});
