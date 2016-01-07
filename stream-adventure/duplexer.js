//Crap node school test doesn't properly verify their solution, my solution,
//other's solutions, etc. See known issues and pull requrest related to this.
var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
    var ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};
