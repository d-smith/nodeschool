fs = require('fs');

function callback(err, data) {
  if(err) {
    console.log(err);
  } else {
    lines = data.toString().split('\n');
    console.log(lines.length - 1);
  }
}

if(process.argv.length != 3) {
  console.log('usage: node firstio.js <filename>');
  process.exit(1);
}

fs.readFile(process.argv[2], callback);
