var through = require('through2');
var split = require('split');
var lineCount = 1;

function write(line, _, next) {
  var s = line.toString();
  if(lineCount % 2 == 0) {
    this.push(s.toUpperCase() + '\n');
  } else {
    this.push(s.toLowerCase() + '\n');
  }
  lineCount += 1;
  next();
}


var stream = through(write);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
