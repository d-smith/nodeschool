http = require('http');
var concat = require('concat-stream')

var httpData = [];
var count = 0;

function printResults() {
  for(var i = 0; i < 3; i++) {
    console.log(httpData[i]);
  }
}

function handleError(err) {
  console.log(err);
  process.exit(1);
}


function getHttp(index) {
  http.get(process.argv[index], function(resp) {
    var concatStream = concat(function(data) {
      var datastr = data.toString();
      httpData[index - 2] = datastr;
      count++;
      
      if(count == 3) {
        printResults();
      }
    });

    resp.on('error', handleError);
    resp.pipe(concatStream);
  });
}

for(var i = 2; i < process.argv.length; i++) {
  getHttp(i);
}
