fs = require('fs');

if(process.argv.length != 3) {
  console.log("Usage: node meet-pipe.js <file>");
  process.exit(1);
}

fs.createReadStream(process.argv[2]).pipe(process.stdout);
