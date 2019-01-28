"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_interface_1 = require("../../interface/event.interface");
var util_1 = require("util");
var user_interface_1 = require("../../interface/user.interface");
var youtube_video_data_service_1 = require("../../service/youtube-video-data.service");
var socketIo = require("socket.io-client");
var copy = require("copy-to-clipboard");
var rug = require("random-username-generator");
var router_1 = require("@angular/router");
var SERVER_URL = 'http://localhost:8080';
var VideoRoomComponent = /** @class */ (function () {
    function VideoRoomComponent(youtubeVideoDataService, router) {
        this.youtubeVideoDataService = youtubeVideoDataService;
        this.router = router;
        this.room = 'whatHappened';
        this.videoHistoryList = [];
        this.messages = [];
        this.currentRoomMember = [];
        this.videoId = 'xfr-OiX-46w';
        this.isReady = false;
    }
    VideoRoomComponent.prototype.ngOnInit = function () {
    };
    VideoRoomComponent.prototype.addNewVideoUrl = function (url) {
        var _this = this;
        if (!util_1.isNullOrUndefined(url)) {
            var videoId_1 = this.getVideoId(url);
            this.youtubeVideoDataService.getVideoInfoById(videoId_1).subscribe(function (res) {
                var videoData = {
                    videoId: videoId_1,
                    videoData: {
                        thumbnail: res.items[0].snippet.thumbnails.default.url,
                        title: res.items[0].snippet.localized.title.substring(0, 25) +
                            (res.items[0].snippet.localized.title.length > 24 ? '...' : '')
                    }
                };
                _this.syncData.socket.emit(event_interface_1.Event.NEW_VIDEO, videoData);
            });
            this.newVideoUrl = undefined;
        }
    };
    VideoRoomComponent.prototype.copyInviteLinkToClipboard = function () {
        copy(document.location.href);
    };
    VideoRoomComponent.prototype.navigateToStartPage = function () {
        this.syncData.socket.emit().destroy();
        this.router.navigateByUrl('/start');
    };
    VideoRoomComponent.prototype.savePlayer = function (player) {
        this.initIoConnection();
        this.syncData = {
            videoId: this.videoId,
            player: player,
            socket: this.socket,
            room: this.room,
        };
        this.syncData.player.playVideo();
        this.isReady = true;
    };
    VideoRoomComponent.prototype.onStateChange = function () {
        this.changeState(this.syncData.player.getPlayerState());
    };
    VideoRoomComponent.prototype.sendMessage = function (text) {
        if (!util_1.isNullOrUndefined(text)) {
            var message = {
                from: this.user,
                content: text
            };
            this.syncData.socket.emit(event_interface_1.Event.SEND_MESSAGE, message);
            this.newMessage = undefined;
        }
    };
    VideoRoomComponent.prototype.playNewVideoById = function (id) {
        this.syncData.socket.emit(event_interface_1.Event.PLAY_NEW_VIDEO, id);
    };
    VideoRoomComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socket = socketIo(SERVER_URL);
        this.socket.on(event_interface_1.Event.CONNECT, function () {
            _this.syncData.clientId = _this.socket.id;
            _this.user = {
                id: _this.syncData.clientId,
                name: rug.generate(),
                role: 'member',
                status: user_interface_1.UserEnum.JOINING
            };
            _this.syncData.socket.emit(event_interface_1.Event.JOIN, _this.syncData.room, _this.user.name);
            _this.syncData.socket.emit(event_interface_1.Event.ALERT_MEMBERS_NEW_USER, _this.user);
            _this.syncData.socket.emit(event_interface_1.Event.ASK_VIDEO_INFORMATION, _this.socket.id);
        });
        this.socket.on(event_interface_1.Event.SEND_MESSAGE, function (message) {
            _this.messages.push(message);
        });
        this.socket.on(event_interface_1.Event.PLAY_NEW_VIDEO, function (id) {
            _this.syncData.player.loadVideoById({
                videoId: id,
                startSeconds: 0
            });
        });
        this.socket.on(event_interface_1.Event.PLAY, function () {
            _this.syncData.player.playVideo();
        });
        this.socket.on(event_interface_1.Event.PAUSE, function () {
            _this.syncData.player.pauseVideo();
        });
        this.socket.on(event_interface_1.Event.SYNC_TIME, function (time) {
            _this.syncVideoTime(time);
        });
        this.socket.on(event_interface_1.Event.NEW_VIDEO, function (videoData) {
            _this.videoHistoryList.unshift(videoData);
        });
        this.socket.on(event_interface_1.Event.ASK_VIDEO_INFORMATION, function (socketId) {
            var videoInfo = {
                url: _this.syncData.player.getVideoUrl(),
                time: _this.syncData.player.getCurrentTime()
            };
            _this.syncData.socket.emit(event_interface_1.Event.SYNC_VIDEO_INFORMATION, videoInfo, socketId);
        });
        this.socket.on(event_interface_1.Event.SYNC_VIDEO_INFORMATION, function (videoInfo) {
            _this.syncData.player.loadVideoById({
                videoId: _this.getVideoId(videoInfo.url),
                startSeconds: videoInfo.time
            });
        });
        this.socket.on(event_interface_1.Event.ALERT_MEMBERS_NEW_USER, function (user) {
            _this.currentRoomMember.push(user);
            _this.syncData.socket.emit(event_interface_1.Event.SYNC_CURRENT_ROOM_MEMBER, _this.user, user.id);
        });
        this.socket.on(event_interface_1.Event.SYNC_CURRENT_ROOM_MEMBER, function (user) {
            _this.currentRoomMember.push(user);
        });
        this.socket.on(event_interface_1.Event.ASK_VIDEO_TIME, function (socketId) {
            _this.syncData.socket.emit(event_interface_1.Event.SYNC_TIME_ON_JOIN, socketId, _this.syncData.player.getCurrentTime());
        });
        this.socket.on(event_interface_1.Event.SYNC_TIME_ON_JOIN, function (time) {
            _this.syncVideoTime(time);
        });
        this.socket.on(event_interface_1.Event.ASK_STATUS, function (socketId) {
            _this.syncData.socket.emit(event_interface_1.Event.SYNC_TIME_ON_JOIN, socketId, _this.syncData.player.getPlayerState());
        });
        this.socket.on(event_interface_1.Event.SYNC_STATUS, function (status) {
            _this.changeState(status);
        });
        //this.socket.on(Event.GET_USER_ROLE, (userList:Array<UserInterface>) =>
        //{
        //    // TODO Replace with enum
        //    console.log(userList);
        //    let checkIfHostExists:UserInterface = userList.find((user:UserInterface) =>
        //    {
        //        return user.role === 'host'
        //    });
        //    console.log(checkIfHostExists);
        //
        //    if(isNullOrUndefined(checkIfHostExists))
        //    {
        //        this.user.role = 'host';
        //    }
        //    console.log(this.user);
        //});
        //this.socket.on(Event.SYNC_HOST);
        //
        //this.socket.on(Event.ASK_FOR_SYNC_TIME, ());
        //this.socket.on(Event.SYNC_TIME_BY_HOST, ())
    };
    VideoRoomComponent.prototype.syncVideoTime = function (time) {
        if (this.syncData.player.getCurrentTime() < time - 0.2 || this.syncData.player.getCurrentTime() > time + 0.2) {
            this.syncData.player.seekTo(time, true);
        }
    };
    VideoRoomComponent.prototype.changeState = function (state) {
        if (this.isReady) {
            switch (state) {
                case -1:
                    break;
                case 1:
                    if (this.user.status === user_interface_1.UserEnum.JOINING) {
                        this.syncData.socket.emit(event_interface_1.Event.ASK_VIDEO_TIME, this.user.id);
                        this.syncData.socket.emit(event_interface_1.Event.PLAY);
                        this.user.status = user_interface_1.UserEnum.JOINED;
                    }
                    else {
                        this.syncData.socket.emit(event_interface_1.Event.SYNC_TIME, this.syncData.player.getCurrentTime());
                        this.syncData.socket.emit(event_interface_1.Event.PLAY);
                    }
                    break;
                case 2:
                    this.syncData.socket.emit(event_interface_1.Event.PAUSE);
                    break;
                case 3:
                    this.syncData.player.playVideo();
                    break;
                default:
                    break;
            }
        }
    };
    VideoRoomComponent.prototype.getVideoId = function (url) {
        if (!util_1.isNullOrUndefined(url) && !util_1.isNullOrUndefined(this.syncData.player)) {
            var idRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
            var videoId = url.split(idRegex)[1];
            return videoId;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], VideoRoomComponent.prototype, "room", void 0);
    VideoRoomComponent = __decorate([
        core_1.Component({
            selector: 'video-room',
            templateUrl: './video-room.component.html',
            styleUrls: ['./video-room.component.scss']
        }),
        __metadata("design:paramtypes", [youtube_video_data_service_1.YoutubeVideoDataService,
            router_1.Router])
    ], VideoRoomComponent);
    return VideoRoomComponent;
}());
exports.VideoRoomComponent = VideoRoomComponent;

//# sourceMappingURL=video-room.component.js.map
