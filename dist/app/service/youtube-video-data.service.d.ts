import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class YoutubeVideoDataService {
    private http;
    private headers;
    constructor(http: HttpClient);
    getVideoInfoById(videoId: string): Observable<any>;
}
