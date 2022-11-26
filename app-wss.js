var express = require('express');
var appWss = express();
var server = require('https').createServer(appWss);
// var io = require('../..')(server);
// New:
var io = require('socket.io')(server);
var port = 443;

io = require('socket.io')(server, {
    path: '/socket.io'
});

io.set('transports', ['websocket']);
io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('action', function (package) {
        console.log('action');
    });

    socket.on('disconnect', function () {
        console.log('SocketIO > Disconnected socket ' + socket.id);
    });
});


server.listen(port);

/** ERRORS **/
process.on('uncaughtException', function (err) {
    console.log(err);
});

io.on('error', function (err) {
    console.log(err);
});
