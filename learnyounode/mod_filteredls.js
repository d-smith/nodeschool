fs = require('fs');
path = require('path');

function readAndFilterDir(dirName, extension, callback) {
  var files = [];

  fs.readdir(dirName, function(err, data) {
    if(err) {
      return callback(err);
    }

    data.forEach(function(file) {
      if(path.extname(file) === "." + extension) {
        files.push(file);
      }
    });

    return callback(null, files);
  });

}

module.exports = readAndFilterDir;
