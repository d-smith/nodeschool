var q = require('q');
var defer = q.defer();

function attachTitle(s) {
  return "DR. " + s;
};

defer.promise
  .then(attachTitle)
  .then(console.log);

defer.resolve("MANHATTAN");
