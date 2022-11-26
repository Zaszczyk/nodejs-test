var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var io = require('../..')(server);
// New:
var io = require('socket.io')(server);
var port = 80;

io.configure(function() {
    io.set('transports', ['websocket']);
});