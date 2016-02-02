var Q = require('q');

var def1 = Q.defer();
var def2 = Q.defer();

function all(p1, p2) {
  var allDef = Q.defer();
  var counter = 0;
  var val1, val2;

  p1.then(function(result) {
    val1 = result;
    ++counter;
    if(counter >= 2) allDef.resolve([val1,val2]);
  })
  .then(null,allDef.reject)
  .done();

  p2.then(function(result) {
    val2 = result;
    ++counter;
    if(counter >= 2) allDef.resolve([val1,val2]);
  })
  .then(null,allDef.reject)
  .done();

  return allDef.promise;
}

all(def1.promise, def2.promise)
.then(console.log)
.done();

setTimeout(function(){
  def1.resolve("PROMISES");
  def2.resolve("FTW");
}, 200);
