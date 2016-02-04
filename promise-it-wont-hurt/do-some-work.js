var qhttp = require('q-io/http');

function getUser(id) {
  return qhttp.read('http://localhost:7001/' + id)
}

function bufToUser(buf) {
  console.log(JSON.parse(buf));
}

qhttp.read('http://localhost:7000')
  .then(getUser)
  .then(function(json){ console.log(JSON.parse(json))})
  .then(null, console.log)
  .done();
