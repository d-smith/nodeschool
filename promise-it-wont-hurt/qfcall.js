var q = require('q');

/*
function parsePromised(s) {
  var def = q.defer()
    , result;

  try {
    result = JSON.parse(s);
  } catch(e) {
    def.reject(e);
  }

  def.resolve(result);
  return def.promise;
}


parsePromised(process.argv[2])
  .then(null, console.log);
*/

q.fcall(JSON.parse,process.argv[2])
.catch(console.log)
.done();
