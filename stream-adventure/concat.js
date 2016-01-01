var concat = require('concat-stream');

function processBuffer(buffer) {
  console.log(buffer.toString().split('').reverse().join(''));
}

var concatStream = concat(processBuffer);

process.stdin.pipe(concatStream);
