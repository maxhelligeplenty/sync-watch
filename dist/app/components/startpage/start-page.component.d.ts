import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class StartPageComponent implements OnInit {
    private router;
    constructor(router: Router);
    ngOnInit(): void;
    joinRoom(): void;
    private getRandomRoomId;
}
