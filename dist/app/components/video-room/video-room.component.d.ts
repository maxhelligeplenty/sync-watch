/// <reference types="youtube" />
import { OnInit } from '@angular/core';
import { SyncVideoInterface } from '../../interface/sync-video.interface';
import { Message } from '../../interface/message.interface';
import { UserInterface } from '../../interface/user.interface';
import { PlaylistInterface } from '../../interface/playlist.interface';
import { YoutubeVideoDataService } from '../../service/youtube-video-data.service';
import { Router } from '@angular/router';
export declare class VideoRoomComponent implements OnInit {
    private youtubeVideoDataService;
    private router;
    protected room: string;
    newVideoUrl: string;
    syncData: SyncVideoInterface;
    videoHistoryList: Array<PlaylistInterface>;
    messages: Array<Message>;
    newMessage: string;
    currentRoomMember: Array<UserInterface>;
    protected videoId: string;
    private isReady;
    private user;
    private socket;
    constructor(youtubeVideoDataService: YoutubeVideoDataService, router: Router);
    ngOnInit(): void;
    addNewVideoUrl(url: string): void;
    copyInviteLinkToClipboard(): void;
    protected navigateToStartPage(): void;
    protected savePlayer(player: YT.Player): void;
    protected onStateChange(): void;
    protected sendMessage(text: string): void;
    protected playNewVideoById(id: string): void;
    private initIoConnection;
    private syncVideoTime;
    private changeState;
    private getVideoId;
}
