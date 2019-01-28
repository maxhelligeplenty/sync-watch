import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export declare class VideoRoomViewComponent implements OnInit {
    private route;
    protected room: string;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
}
