fs = require('fs');
path = require('path');

//TODO - partially applied function to inject extension to filter
function listCallback(err, data) {
    if(err) {
      console.log(err);
      return;
    }

    data.forEach(filterFile);
}

function filterFile(file) {
  if(path.extname(file) === "." + process.argv[3]) {
    console.log(file);
  }
}

if(process.argv.length != 4) {
  console.log(process.argv);
  console.log("usage: node filtered.js <dir> <ext>")
  return;
}

fs.readdir(process.argv[2], listCallback);
