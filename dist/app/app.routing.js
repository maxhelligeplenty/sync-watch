"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var beta_report_view_component_1 = require("./views/beta-report-view/beta-report-view.component");
var start_page_view_component_1 = require("./views/start-page-view/start-page-view.component");
var video_room_view_component_1 = require("./views/video-room-view/video-room-view.component");
var privacy_view_component_1 = require("./views/privacy-view/privacy-view.component");
var impressum_view_component_1 = require("./views/impressum-view/impressum-view.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: start_page_view_component_1.StartPageViewComponent,
    },
    {
        path: 'room/:id',
        component: video_room_view_component_1.VideoRoomViewComponent,
    },
    {
        path: 'datenschutz',
        component: privacy_view_component_1.PrivacyViewComponent
    },
    {
        path: 'impressum',
        component: impressum_view_component_1.ImpressumViewComponent
    },
    {
        path: 'beta',
        component: beta_report_view_component_1.BetaReportViewComponent
    }
];

//# sourceMappingURL=app.routing.js.map
