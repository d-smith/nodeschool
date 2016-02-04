var qhttp = require('q-io/http');

qhttp.read('http://localhost:7000')
  .then(function(sess) {
    var id = sess.toString('utf8');
    qhttp.read('http://localhost:7001/' + id)
      .then(function(user){
          console.log(JSON.parse(user));
      })
      .then(null, console.log)
      .done();
  })
  .then(null, console.log)
  .done();
