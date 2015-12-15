fs = require('fs');

if(process.argv.length != 3) {
  console.log('usage: node firstio.js <filename>');
  process.exit(1);
}

var buf = fs.readFileSync(process.argv[2]);
lines = buf.toString().split('\n');
console.log(lines.length - 1);
