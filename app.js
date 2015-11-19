var express = require("express"),
    app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(5001, function(){
  console.log('server node en 5001');
});


io.on('connection', function (socket) {
  socket.on('start', function (data) {
    socket.broadcast.emit('start_notification', { name: data.name });
    socket.emit('start_notification', {name: data.name});
  });
});