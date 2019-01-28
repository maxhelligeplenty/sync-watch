"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

var mail_server_1 = require("./mail/mail-server");
var video_sync_server_1 = require("./video-sync-server");
var server = new video_sync_server_1.VideoSyncServer().getApp();
exports.server = server;
var mailServer = new mail_server_1.MailServer().getApp();
exports.mailServer = mailServer;
