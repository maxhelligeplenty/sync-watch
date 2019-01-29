"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

var mail_server_1 = require("./mail-server");
var video_sync_server_1 = require("./video-sync-server");
var server = new video_sync_server_1.VideoSyncServer().getApp();
exports.server = server;
var mailServer = new mail_server_1.MailServer().getApp();
exports.mailServer = mailServer;

const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname));
});

server = http.createServer(app);

server.listen(port, function () {
    console.log('Running client server on port 4200');
});