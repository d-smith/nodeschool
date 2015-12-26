var net = require('net');


function now() {
  var rightNow = new Date();

  var month = rightNow.getMonth() + 1;
  var hour = rightNow.getHours();
  var displayHour = hour.toString();
  if(hour < 10) {
    displayHour = '0' + displayHour;
  }

  return rightNow.getFullYear() + '-' +
  month + '-' +
  rightNow.getDate() + ' ' +
  displayHour + ':' +
  rightNow.getMinutes() + '\n';
}

function netCallback(socket) {
  socket.write(now());
  socket.end();
}




var server = net.createServer(netCallback);
server.listen(parseInt(process.argv[2]));
