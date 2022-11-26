var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var io = require('../..')(server);
// New:
var io = require('socket.io')(server);
var port = 80;

io = require('socket.io')(server, {
    path: '/socket.io'
});

server.listen(port);

/** ERRORS **/
process.on('uncaughtException', function (err) {
    console.log(err);
});

io.on('error', function (err) {
    console.log(err);
});