http = require('http');
var concat = require('concat-stream')

if(process.argv.length != 3) {
  console.log("Usage: node http-collect.js <url>");
  return;
}

function all_the_data(data) {
  var datastr = data.toString();
  console.log(datastr.length);
  console.log(datastr);
}

function handleError(err) {
  console.log(err);
  process.exit(1);
}

http.get(process.argv[2], function(resp){
  var concatStream = concat(all_the_data);
  resp.on('error', handleError);
  resp.pipe(concatStream);
});
