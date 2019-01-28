"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var footer_component_1 = require("./components/footer/footer.component");
var report_beta_component_1 = require("./components/report-beta/report-beta.component");
var beta_report_view_component_1 = require("./views/beta-report-view/beta-report-view.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var ngx_youtube_player_1 = require("ngx-youtube-player");
var video_room_component_1 = require("./components/video-room/video-room.component");
var start_page_component_1 = require("./components/startpage/start-page.component");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var video_room_view_component_1 = require("./views/video-room-view/video-room-view.component");
var start_page_view_component_1 = require("./views/start-page-view/start-page-view.component");
var animations_1 = require("@angular/platform-browser/animations");
var angular2_cookie_law_1 = require("angular2-cookie-law");
var http_1 = require("@angular/common/http");
var youtube_video_data_service_1 = require("./service/youtube-video-data.service");
var privacy_component_1 = require("./components/privacy/privacy.component");
var privacy_view_component_1 = require("./views/privacy-view/privacy-view.component");
var impressum_component_1 = require("./components/impressum/impressum.component");
var impressum_view_component_1 = require("./views/impressum-view/impressum-view.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                video_room_view_component_1.VideoRoomViewComponent,
                start_page_view_component_1.StartPageViewComponent,
                video_room_component_1.VideoRoomComponent,
                start_page_component_1.StartPageComponent,
                privacy_view_component_1.PrivacyViewComponent,
                privacy_component_1.PrivacyComponent,
                beta_report_view_component_1.BetaReportViewComponent,
                report_beta_component_1.ReportBetaComponent,
                footer_component_1.FooterComponent,
                impressum_component_1.ImpressumComponent,
                impressum_view_component_1.ImpressumViewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                angular2_cookie_law_1.CookieLawModule,
                forms_1.FormsModule,
                ngx_youtube_player_1.YoutubePlayerModule,
                router_1.RouterModule.forRoot(app_routing_1.routes),
            ],
            providers: [youtube_video_data_service_1.YoutubeVideoDataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
