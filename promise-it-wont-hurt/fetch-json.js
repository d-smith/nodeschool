var qhttp = require('q-io/http');
var endpoint = 'http://localhost:1337';

resp = qhttp.read(endpoint)
        .then(function(json) {
          console.log(JSON.parse(json))
        })
        .then(null, console.log)
        .done();
