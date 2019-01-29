"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var http_1 = require("http");
var path = require('path');
var express = require("express");
var ClientServer = /** @class */ (function () {
    function ClientServer() {
        this.PORT = 4200;
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
    }

    ClientServer.prototype.createApp = function () {
        this.client = express();
        this.client.use(express.static(__dirname + '/dist/'));

        this.client.get('*', function(req,res) {
            res.sendFile(path.join(__dirname + '/dist/index.html'));
        });
    };
    ClientServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.client);
    };
    ClientServer.prototype.config = function () {
        this.port = process.env.PORT || this.PORT;
    };
    ClientServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running client server on port %s', _this.port);
        });
    };
    ClientServer.prototype.getApp = function () {
        return this.client;
    };
    return ClientServer;
}());
exports.ClientServer = ClientServer;
