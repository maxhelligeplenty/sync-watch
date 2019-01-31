(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <router-outlet></router-outlet>\n    <footer></footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  position: relative;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBa0I7RUFDbEIsaUJBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6MTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_report_beta_report_beta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/report-beta/report-beta.component */ "./src/app/components/report-beta/report-beta.component.ts");
/* harmony import */ var _views_beta_report_view_beta_report_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/beta-report-view/beta-report-view.component */ "./src/app/views/beta-report-view/beta-report-view.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _components_video_room_video_room_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/video-room/video-room.component */ "./src/app/components/video-room/video-room.component.ts");
/* harmony import */ var _components_startpage_start_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/startpage/start-page.component */ "./src/app/components/startpage/start-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _views_video_room_view_video_room_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/video-room-view/video-room-view.component */ "./src/app/views/video-room-view/video-room-view.component.ts");
/* harmony import */ var _views_start_page_view_start_page_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/start-page-view/start-page-view.component */ "./src/app/views/start-page-view/start-page-view.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-cookie-law */ "./node_modules/angular2-cookie-law/fesm5/angular2-cookie-law.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_youtube_video_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/youtube-video-data.service */ "./src/app/service/youtube-video-data.service.ts");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "./src/app/components/privacy/privacy.component.ts");
/* harmony import */ var _views_privacy_view_privacy_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/privacy-view/privacy-view.component */ "./src/app/views/privacy-view/privacy-view.component.ts");
/* harmony import */ var _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/impressum/impressum.component */ "./src/app/components/impressum/impressum.component.ts");
/* harmony import */ var _views_impressum_view_impressum_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/impressum-view/impressum-view.component */ "./src/app/views/impressum-view/impressum-view.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_video_room_view_video_room_view_component__WEBPACK_IMPORTED_MODULE_13__["VideoRoomViewComponent"],
                _views_start_page_view_start_page_view_component__WEBPACK_IMPORTED_MODULE_14__["StartPageViewComponent"],
                _components_video_room_video_room_component__WEBPACK_IMPORTED_MODULE_9__["VideoRoomComponent"],
                _components_startpage_start_page_component__WEBPACK_IMPORTED_MODULE_10__["StartPageComponent"],
                _views_privacy_view_privacy_view_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyViewComponent"],
                _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_19__["PrivacyComponent"],
                _views_beta_report_view_beta_report_view_component__WEBPACK_IMPORTED_MODULE_3__["BetaReportViewComponent"],
                _components_report_beta_report_beta_component__WEBPACK_IMPORTED_MODULE_2__["ReportBetaComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
                _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_21__["ImpressumComponent"],
                _views_impressum_view_impressum_view_component__WEBPACK_IMPORTED_MODULE_22__["ImpressumViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                angular2_cookie_law__WEBPACK_IMPORTED_MODULE_16__["CookieLawModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YoutubePlayerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_12__["routes"]),
            ],
            providers: [_service_youtube_video_data_service__WEBPACK_IMPORTED_MODULE_18__["YoutubeVideoDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _views_beta_report_view_beta_report_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/beta-report-view/beta-report-view.component */ "./src/app/views/beta-report-view/beta-report-view.component.ts");
/* harmony import */ var _views_start_page_view_start_page_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/start-page-view/start-page-view.component */ "./src/app/views/start-page-view/start-page-view.component.ts");
/* harmony import */ var _views_video_room_view_video_room_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/video-room-view/video-room-view.component */ "./src/app/views/video-room-view/video-room-view.component.ts");
/* harmony import */ var _views_privacy_view_privacy_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/privacy-view/privacy-view.component */ "./src/app/views/privacy-view/privacy-view.component.ts");
/* harmony import */ var _views_impressum_view_impressum_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/impressum-view/impressum-view.component */ "./src/app/views/impressum-view/impressum-view.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: _views_start_page_view_start_page_view_component__WEBPACK_IMPORTED_MODULE_1__["StartPageViewComponent"],
    },
    {
        path: 'room/:id',
        component: _views_video_room_view_video_room_view_component__WEBPACK_IMPORTED_MODULE_2__["VideoRoomViewComponent"],
    },
    {
        path: 'datenschutz',
        component: _views_privacy_view_privacy_view_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyViewComponent"]
    },
    {
        path: 'impressum',
        component: _views_impressum_view_impressum_view_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumViewComponent"]
    },
    {
        path: 'beta',
        component: _views_beta_report_view_beta_report_view_component__WEBPACK_IMPORTED_MODULE_0__["BetaReportViewComponent"]
    },
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-3 footer\">\n        </div>\n        <div class=\"col-md-6 footer text-center\">\n            <div class=\"credits\">\n                    <span>made with <span class=\"fas fa-heart\"></span> by <strong><a class=\"c-link\" href=\"https://roelldev.de\"\n                                                                                     target=\"_blank\">roelldev.de</a></strong> and\n                    <strong><a class=\"c-link\" href=\"https://github.com/maxhelligeplenty\" target=\"_blank\">maxhellige</a></strong>\n                    </span>\n            </div>\n        </div>\n        <div class=\"col-md-3 footer legal\">\n            <span><a class=\"c-link\" (click)=\"navigateToImpressum()\">Impressum</a></span>\n            <span><a class=\"c-link\" (click)=\"navigateToPrivacy()\">Datenschutz</a></span>\n            <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Report a bug\" class=\"bug-report fas fa-bug\"\n                  (click)=\"navigateToBeta()\"></span>\n        </div>\n    </div>\n</div>\n\n<cookie-law [expiration]=\"1\"></cookie-law>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 575.98px) {\n  .legal {\n    display: flex;\n    justify-content: center; }\n  .bug-report {\n    display: flex;\n    justify-content: center; }\n  .container-fluid {\n    position: static !important; } }\n\n.legal span {\n  padding: 10px;\n  font-size: 1.3rem;\n  float: right; }\n\n.container-fluid {\n  background-color: #191919;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.bug-report {\n  float: left;\n  font-size: 1.3rem;\n  font-family: fontawesome;\n  padding: 10px; }\n\n.bug-report:hover {\n    color: #d34242;\n    cursor: pointer; }\n\n.footer .credits {\n  font-size: 1.3rem;\n  padding: 10px; }\n\n.footer .credits .fa-heart {\n    font-family: fontawesome;\n    color: deeppink; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGNBQWE7SUFDYix3QkFBdUIsRUFDMUI7RUFDRDtJQUVJLGNBQWE7SUFDYix3QkFBdUIsRUFDMUI7RUFDRDtJQUVJLDRCQUEyQixFQUM5QixFQUFBOztBQUVMO0VBSVEsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixhQUFZLEVBQ2Y7O0FBRUw7RUFFSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUSxFQUNYOztBQUNEO0VBRUksWUFBVztFQUNYLGtCQUFpQjtFQUNqQix5QkFBd0I7RUFDeEIsY0FBYSxFQU1oQjs7QUFYRDtJQVFRLGVBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2xCOztBQUVMO0VBSVEsa0JBQWlCO0VBQ2pCLGNBQWEsRUFNaEI7O0FBWEw7SUFRWSx5QkFBd0I7SUFDeEIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpXG57XG4gICAgLmxlZ2Fse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmJ1Zy1yZXBvcnRcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlkXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmxlZ2FsXG57XG4gICAgc3BhblxuICAgIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG4uY29udGFpbmVyLWZsdWlkXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG4uYnVnLXJlcG9ydFxue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgICY6aG92ZXJcbiAgICB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjExLCA2NiwgNjYpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLmZvb3RlclxueyAgIFxuICAgIC5jcmVkaXRzXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLmZhLWhlYXJ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgICAgICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.navigateToBeta = function () {
        this.router.navigate(['/beta']);
    };
    FooterComponent.prototype.navigateToPrivacy = function () {
        this.router.navigate(['/datenschutz']);
    };
    FooterComponent.prototype.navigateToImpressum = function () {
        this.router.navigate(['/impressum']);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            animations: [],
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/impressum/impressum.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/impressum/impressum.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 p-5\">\n            <h1>Impressum</h1>\n            \n            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>\n            <p>Max Hellige<br/>\n               Birkhahnweg 19<br/>\n               34123 Kassel</p>\n            \n            <h2>Kontakt</h2>\n            <p>Telefon: +491746150609<br/>\n               E-Mail: m.hellige@gmx.de</p>\n            \n            <p>Quelle:\n                <a href=\"https://www.e-recht24.de\">https://www.e-recht24.de</a>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/impressum/impressum.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/impressum/impressum.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 3rem;\n  font-weight: bold; }\n\nh2, a {\n  color: #ff5e5e; }\n\nh3 {\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFDRDtFQUVJLGVBQWMsRUFDakI7O0FBQ0Q7RUFFSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMVxue1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmgyLCBhXG57XG4gICAgY29sb3I6ICNmZjVlNWU7XG59XG5oM1xue1xuICAgIGNvbG9yOiBncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/impressum/impressum.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/impressum/impressum.component.ts ***!
  \*************************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumComponent = /** @class */ (function () {
    function ImpressumComponent() {
    }
    ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "impressum",
            template: __webpack_require__(/*! ./impressum.component.html */ "./src/app/components/impressum/impressum.component.html"),
            styles: [__webpack_require__(/*! ./impressum.component.scss */ "./src/app/components/impressum/impressum.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumComponent);
    return ImpressumComponent;
}());



/***/ }),

/***/ "./src/app/components/privacy/privacy.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/privacy/privacy.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 p-5\">\n            <h1>Datenschutzerkl&auml;rung</h1>\n            <h2>1. Datenschutz auf einen Blick</h2>\n            <h3>Allgemeine Hinweise</h3>\n            <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>\n            <h3>Datenerfassung auf unserer Website</h3>\n            <p><strong>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</strong></p>\n            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser Website entnehmen.</p>\n            <p><strong>Wie erfassen wir Ihre Daten?</strong></p>\n            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>\n            <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>\n            <p><strong>Wof&uuml;r nutzen wir Ihre Daten?</strong></p>\n            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>\n            <p><strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong></p>\n            <p>Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung, Sperrung oder L&ouml;schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p>\n            <p>Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerkl&auml;rung unter &bdquo;Recht auf Einschr&auml;nkung der Verarbeitung&ldquo;.</p>\n            <h3>Analyse-Tools und Tools von Drittanbietern</h3>\n            <p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zur&uuml;ckverfolgt werden. Sie k&ouml;nnen dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>\n            <p>Sie k&ouml;nnen dieser Analyse widersprechen. &Uuml;ber die Widerspruchsm&ouml;glichkeiten werden wir Sie in dieser Datenschutzerkl&auml;rung informieren.</p>\n            <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>\n            <h3>Datenschutz</h3>\n            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p>\n            <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p>\n            <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>\n            <h3>Hinweis zur verantwortlichen Stelle</h3>\n            <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>\n            <p>Max Hellige <br/>\n               Birkhahnweg 19<br/>\n               Kassel 34123<br/>\n               Hessen, Deutschland</p>\n            \n            <p>Telefon: +491746150609<br/>\n               E-Mail: m.hellige@gmx.de</p>\n            <p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>\n            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>\n            <p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>\n            <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>\n            <p>\n                <strong>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gr&uuml;nden, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch f&uuml;r ein auf diese Bestimmungen gest&uuml;tztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerkl&auml;rung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten &uuml;berwiegen oder die Verarbeitung dient der Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong>\n            </p>\n            <p>\n                <strong>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch f&uuml;r das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschlie&szlig;end nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong>\n            </p>\n            <h3>Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde</h3>\n            <p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>\n            <h3>Recht auf Daten&uuml;bertragbarkeit</h3>\n            <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>\n            <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>\n            <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>\n            <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>\n            <h3>Auskunft, Sperrung, L&ouml;schung und Berichtigung</h3>\n            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>\n            <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>\n            <p>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p>\n            <ul>\n                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>\n                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah / geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li>\n                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>\n                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>\n            </ul>\n            <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>\n            <h2>3. Datenerfassung auf unserer Website</h2>\n            <h3>Cookies</h3>\n            <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>\n            <p>Die meisten der von uns verwendeten Cookies sind so genannte &ldquo;Session-Cookies&rdquo;. Sie werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Andere Cookies bleiben auf Ihrem Endger&auml;t gespeichert bis Sie diese l&ouml;schen. Diese Cookies erm&ouml;glichen es uns, Ihren Browser beim n&auml;chsten Besuch wiederzuerkennen.</p>\n            <p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p>\n            <p>Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerkl&auml;rung gesondert behandelt.</p>\n            <h3>Kontaktformular</h3>\n            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>\n            <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k&ouml;nnen diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.</p>\n            <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>\n            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>\n            <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>\n            <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</p>\n            <p>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>\n            <h2>4. Plugins und Tools</h2>\n            <h3>YouTube mit erweitertem Datenschutz</h3>\n            <p>Unsere Website nutzt Plugins der Website YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>\n            <p>Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen &uuml;ber die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube &ndash; unabh&auml;ngig davon, ob Sie sich ein Video ansehen &ndash; eine Verbindung zum Google DoubleClick-Netzwerk her.</p>\n            <p>Sobald Sie ein YouTube-Video auf unserer Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p>\n            <p>Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endger&auml;t speichern. Mit Hilfe dieser Cookies kann YouTube Informationen &uuml;ber Besucher unserer Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endger&auml;t, bis Sie sie l&ouml;schen.</p>\n            <p>Gegebenenfalls k&ouml;nnen nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorg&auml;nge ausgel&ouml;st werden, auf die wir keinen Einfluss haben.</p>\n            <p>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>\n            <p>Weitere Informationen &uuml;ber Datenschutz bei YouTube finden Sie in deren Datenschutzerkl&auml;rung unter:\n                <a href=\"https://policies.google.com/privacy?hl=de\" target=\"_blank\"\n                   rel=\"noopener\">https://policies.google.com/privacy?hl=de\n                </a>\n            </p>\n            <h3>Verwendung von Google Analytics</h3>\n            <p>Diese Webseite benutzt Google Analytics, einen Webanalysedienst der Google Inc. (folgend: Google). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Webseite wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>\n            <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Webseite vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a rel=\"nofollow\" href=\"http://tools.google.com/dlpage/gaoptout?hl=de\">Browser-Add-on zur Deaktivierung von Google Analytics</a>.</p>\n            <p>Quelle:\n                <a href=\"https://www.e-recht24.de/muster-datenschutzerklaerung.html\">https://www.e-recht24.de/muster-datenschutzerklaerung.html</a>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/privacy/privacy.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/privacy/privacy.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 3rem;\n  font-weight: bold; }\n\nh2, a {\n  color: #ff5e5e; }\n\nh3 {\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ3BCOztBQUNEO0VBRUksZUFBYyxFQUNqQjs7QUFDRDtFQUVJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDFcbntcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oMiwgYVxue1xuICAgIGNvbG9yOiAjZmY1ZTVlO1xufVxuaDNcbntcbiAgICBjb2xvcjogZ3JheTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/privacy/privacy.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/privacy/privacy.component.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "privacy",
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/components/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/components/privacy/privacy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/components/report-beta/report-beta.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/report-beta/report-beta.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"header\">\n                <h1 class=\"p-2\">Bug Report</h1>\n            </div>  \n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form>\n                <div class=\"p-2\">\n                    <label>Name</label>\n                    <input placeholder=\"Name\" type=\"text\">\n                </div>\n                <div class=\"p-2\">\n                    <label>Email</label>\n                    <input placeholder=\"Email\" type=\"email\" required>\n                </div>    \n                <div class=\"p-2\">\n                    <label>Title should describe your bug/problem *</label>\n                    <input placeholder=\"Title\" type=\"text\" required>\n                </div>\n                <div class=\"p-2\">\n                    <label>Detailed description and steps to recreate the bug *</label>\n                    <textarea></textarea>\n                </div>\n                <div class=\"p-2\">   \n                    <div class=\"upload-btn-wrapper\">\n                        <label>Upload images to visualize your bug</label>\n                        <button>Upload a file</button>\n                        <input type=\"file\" name=\"myfile\" />\n                    </div>\n                </div>\n                <div class=\"p-2 submit-button-container\">\n                    <button type=\"submit\" (click)=\"sendMailToServer()\">Submit Bug\n                        <span class=\"fas fa-bug\"></span>\n                    </button>\n                </div>\n                <div class=\"p-2\">\n                    <span>Version beta-1.0</span>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/report-beta/report-beta.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/report-beta/report-beta.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  background-color: white; }\n\nlabel {\n  display: flex; }\n\n.submit-button-container button span {\n  font-family: fontawesome; }\n\ninput[type=\"text\"], input[type=\"email\"], textarea {\n  width: 100%;\n  outline: none;\n  padding: 10px;\n  border: none;\n  border-radius: 2px; }\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block; }\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\nh1 {\n  font-size: 3rem;\n  font-weight: bold; }\n\nh2, a {\n  color: #ff5e5e; }\n\nh3 {\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC1iZXRhL3JlcG9ydC1iZXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0JBQXVCLEVBQzFCOztBQUNEO0VBRUksY0FBYSxFQUNoQjs7QUFDRDtFQU1XLHlCQUF3QixFQUMzQjs7QUFHUjtFQUVJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUN0Qjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLE9BQU07RUFDTixXQUFVLEVBQ1g7O0FBQ0g7RUFFSSxnQkFBZTtFQUNmLGtCQUFpQixFQUNwQjs7QUFDRDtFQUVJLGVBQWMsRUFDakI7O0FBQ0Q7RUFFSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC1iZXRhL3JlcG9ydC1iZXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmxhYmVsXG57XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lclxue1xuICAgIGJ1dHRvblxuICAgIHtcbiAgICAgICBzcGFuXG4gICAgICAge1xuICAgICAgICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gICAgICAgfSBcbiAgICB9XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSxpbnB1dFt0eXBlPVwiZW1haWxcIl0sdGV4dGFyZWFcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmgxXG57XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaDIsIGFcbntcbiAgICBjb2xvcjogI2ZmNWU1ZTtcbn1cbmgzXG57XG4gICAgY29sb3I6IGdyYXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/report-beta/report-beta.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/report-beta/report-beta.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReportBetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBetaComponent", function() { return ReportBetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface_event_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../interface/event.interface */ "./src/app/interface/event.interface.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ReportBetaComponent = /** @class */ (function () {
    function ReportBetaComponent() {
    }
    ReportBetaComponent.prototype.sendMailToServer = function () {
        this.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SEND_MAIL);
    };
    ReportBetaComponent.prototype.ngOnInit = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('localhost:1337');
    };
    ReportBetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'report-beta',
            template: __webpack_require__(/*! ./report-beta.component.html */ "./src/app/components/report-beta/report-beta.component.html"),
            styles: [__webpack_require__(/*! ./report-beta.component.scss */ "./src/app/components/report-beta/report-beta.component.scss")]
        })
    ], ReportBetaComponent);
    return ReportBetaComponent;
}());



/***/ }),

/***/ "./src/app/components/startpage/start-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/startpage/start-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start-page\">\n    <div class=\"container-fluid landing-page\">\n        <div class=\"brand\">\n            <h1>\n                <span class=\"brand-icon fas fa-play-circle\"></span>\n                Sync Watch\n            </h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12 main-container d-flex justify-content-center\">\n                <div class=\"join-button\"\n                        (click)=\"joinRoom()\">\n                    Create a new Room\n                </div>\n            </div>\n        </div>\n        <div class=\"description-container\">\n            <h2>Ever wanted to watch YouTube together ?</h2>\n        </div>\n    </div>\n    <div class=\"container-fluid features\">\n        <div class=\"row\">\n            <div class=\"col-md-12 p-2 pt-5\">\n                <h3 class=\"title\">Features</h3>\n            </div>\n        </div>\n        <div class=\"row pb-5\">\n            <div class=\"col-md-12 col-lg-3 p-5\">\n                <div class=\"c-card mb-2\">\n                    <div class=\"header\">\n                        <span class=\"icon fab fa-youtube\"></span>\n                    </div>\n                    <div class=\"body p-3\">\n                        <h3>Steam Youtube videos synchron with your friends</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-lg-3 p-5\">\n                <div class=\"c-card mb-2\">\n                    <div class=\"header\">\n                        <span class=\"icon far fa-comments\"></span>\n                    </div>\n                    <div class=\"body p-3\">\n                        <h3>Chat feature</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-lg-3 p-5\">\n                <div class=\"c-card mb-2\">\n                    <div class=\"header\">\n                        <span class=\"icon fas fa-rocket\"></span>\n                    </div>\n                    <div class=\"body p-3\">\n                        <h3>Best application performance</h3> \n                        <h3 class=\"text-muted\">build with Angular</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-lg-3 p-5\">\n                    <div class=\"c-card mb-2\">\n                        <div class=\"header\">\n                            <span class=\"icon fas fa-mobile\"></span>\n                        </div>\n                        <div class=\"body p-3\">\n                            <h3>Build for mobile first</h3>\n                            <h3 class=\"text-muted\">responsive design.</h3>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n    <div class=\"container-fluid support\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 pt-5\">\n                <h3 class=\"title\">Support</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12 pt-3 pb-5\">\n                <h4>Follow our socials</h4>\n                <div class=\"socials\">\n                    <span class=\"pr-2 fab fa-twitter\"></span>\n                    <span class=\"pr-2 fab fa-instagram\"></span>\n                </div>\n                <h4>Donate</h4>\n                <div class=\"donate\">\n                    <span class=\"pr-2 fas fa-coffee\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/startpage/start-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/startpage/start-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".join-button {\n  border-radius: 2px;\n  border: 2px solid white;\n  padding: 20px;\n  position: absolute;\n  background-color: #353535;\n  top: 50%; }\n  .join-button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: transparent; }\n  .brand {\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 10px;\n  background-color: #353535;\n  text-align: center; }\n  .brand .brand-icon {\n    font-family: fontawesome;\n    margin-right: 10px; }\n  .landing-page {\n  position: relative; }\n  .start-page {\n  background-image: url('mountains-1412683.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed; }\n  .description-container {\n  position: absolute;\n  top: 60%;\n  left: 0;\n  right: 0;\n  text-align: center; }\n  .description-container h2 {\n    font-size: 4rem;\n    font-weight: bold; }\n  .main-container {\n  height: 100vh; }\n  .features {\n  text-align: center;\n  background-color: black;\n  /* RGBa with 0.6 opacity */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* For IE 5.5 - 7*/\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);\n  /* For IE 8*/\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\"; }\n  .features .title {\n    color: white;\n    font-size: 3rem;\n    font-weight: bolder; }\n  .features .c-card {\n    padding: 10px;\n    height: 40vh;\n    border-radius: 2px;\n    background-color: #191919; }\n  .features .c-card .header {\n      text-align: center;\n      background-color: transparent;\n      margin: -10px; }\n  .features .c-card .header .icon {\n        font-family: fontawesome;\n        font-size: 5rem; }\n  .features .c-card .body {\n      text-align: center;\n      font-size: 1.5rem; }\n  .support {\n  text-align: center; }\n  .support .title {\n    color: white;\n    font-size: 3rem;\n    font-weight: bolder; }\n  .support .socials {\n    font-family: fontawesome;\n    font-size: 3rem; }\n  .support .donate {\n    font-family: fontawesome;\n    font-size: 3rem; }\n  @media (max-width: 575.98px) {\n  .join-button {\n    top: 40% !important; }\n  .description-container {\n    top: 50% !important; }\n    .description-container h2 {\n      font-size: 3rem !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3N0YXJ0cGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLDBCQUFpQztFQUNqQyxTQUFRLEVBT1g7RUFkRDtJQVVRLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLDhCQUE2QixFQUNoQztFQUVMO0VBRUksY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsWUFBVztFQUNYLFVBQVM7RUFDVCwwQkFBZ0M7RUFDaEMsbUJBQWtCLEVBTXJCO0VBZEQ7SUFXUSx5QkFBd0I7SUFDeEIsbUJBQWtCLEVBQ3JCO0VBRUw7RUFFSSxtQkFBa0IsRUFDckI7RUFDRDtFQUVJLCtDQUFxRTtFQUNyRSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLHVCQUFzQjtFQUN0Qiw2QkFBNEIsRUFDL0I7RUFDRDtFQUVJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsUUFBTztFQUNQLFNBQVE7RUFDUixtQkFBa0IsRUFNckI7RUFaRDtJQVNRLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ3BCO0VBRUw7RUFFSSxjQUFhLEVBQ2hCO0VBQ0Q7RUFFSSxtQkFBa0I7RUFDbEIsd0JBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixxQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLG1HQUFpRztFQUNqRyxhQUFhO0VBQ2IseUdBQXdHLEVBOEIzRztFQXZDRDtJQVlRLGFBQVk7SUFDWixnQkFBZTtJQUNmLG9CQUFtQixFQUN0QjtFQWZMO0lBa0JRLGNBQWE7SUFDYixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLDBCQUF5QixFQWlCNUI7RUF0Q0w7TUF3QlksbUJBQWtCO01BQ2xCLDhCQUE2QjtNQUM3QixjQUFhLEVBTWhCO0VBaENUO1FBNkJnQix5QkFBd0I7UUFDeEIsZ0JBQWUsRUFDbEI7RUEvQmI7TUFtQ1ksbUJBQWtCO01BQ2xCLGtCQUFpQixFQUNwQjtFQUdUO0VBRUksbUJBQWtCLEVBaUJyQjtFQW5CRDtJQUtRLGFBQVk7SUFDWixnQkFBZTtJQUNmLG9CQUFtQixFQUN0QjtFQVJMO0lBV1EseUJBQXdCO0lBQ3hCLGdCQUFlLEVBQ2xCO0VBYkw7SUFnQlEseUJBQXdCO0lBQ3hCLGdCQUFlLEVBQ2xCO0VBRUw7RUFFSTtJQUVHLG9CQUFrQixFQUNwQjtFQUNEO0lBRUksb0JBQW1CLEVBS3RCO0lBUEQ7TUFLUSwyQkFBMEIsRUFDN0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnRwYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9pbi1idXR0b25cbntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCA1MywgNTMpO1xuICAgIHRvcDogNTAlO1xuICAgICY6aG92ZXJcbiAgICB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuLmJyYW5kXG57XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTMsIDUzLCA1Myk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5icmFuZC1pY29uXG4gICAge1xuICAgICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG4ubGFuZGluZy1wYWdlXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXJ0LXBhZ2VcbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5zLTE0MTI2ODMuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lclxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoMlxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4ubWFpbi1jb250YWluZXJcbntcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmZlYXR1cmVzXG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAvKiBSR0JhIHdpdGggMC42IG9wYWNpdHkgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgLyogRm9yIElFIDUuNSAtIDcqL1xuICAgIGZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0jOTkwMDAwMDAsIGVuZENvbG9yc3RyPSM5OTAwMDAwMCk7XG4gICAgLyogRm9yIElFIDgqL1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9Izk5MDAwMDAwLCBlbmRDb2xvcnN0cj0jOTkwMDAwMDApXCI7XG4gICAgLnRpdGxlXG4gICAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gICAgLmMtY2FyZFxuICAgIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG4gICAgICAgIC5oZWFkZXJcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgICAgICAgLmljb25cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib2R5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuLnN1cHBvcnRcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLnRpdGxlXG4gICAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB9XG4gICAgLnNvY2lhbHNcbiAgICB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgICAuZG9uYXRlXG4gICAge1xuICAgICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpXG57XG4gICAgLmpvaW4tYnV0dG9uXG4gICAge1xuICAgICAgIHRvcDo0MCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lclxuICAgIHtcbiAgICAgICAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgaDJcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/startpage/start-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/startpage/start-page.component.ts ***!
  \**************************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(router) {
        this.router = router;
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent.prototype.joinRoom = function () {
        this.router.navigate(['/room', this.getRandomRoomId()]);
    };
    StartPageComponent.prototype.getRandomRoomId = function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'start',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/components/startpage/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.scss */ "./src/app/components/startpage/start-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/app/components/video-room/video-room.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/video-room/video-room.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"room-view container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <button class=\"float-left header-button\"\n                    (click)=\"navigateToStartPage()\">\n                <span class=\"fas fa-home mr-1\"></span>\n                Home\n            </button>\n        </div>\n        <div class=\"col-lg-4\">\n            <button type=\"button\" class=\"header-button float-right\"\n                    (click)=\"copyInviteLinkToClipboard()\">Invite Friends\n                <span class=\"fas fa-user-plus\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-9 p-3\">\n            <youtube-player [videoId]=\"videoId\"\n                            (ready)=\"savePlayer($event)\"\n                            (change)=\"onStateChange()\">\n            </youtube-player>\n            <div class=\"add-video-url-container mb-3\">\n                <input [(ngModel)]=\"newVideoUrl\"\n                       type=\"text\"\n                       placeholder=\"Add video url to playlist\"\n                       (keydown.enter)=\"addNewVideoUrl(newVideoUrl)\">\n                <button (click)=\"addNewVideoUrl(newVideoUrl)\" type=\"button\">\n                    <span class=\"fas fa-plus-square\"></span>\n                </button>\n            </div>\n        </div>\n        <div class=\"col-lg-3 p-3\">\n            <!--<div *ngFor=\"let user of currentRoomMember\">-->\n            <!--{{user.name}}-->\n            <!--</div>-->\n            <div class=\"chat\">\n                <div class=\"chat-output p-3 mb-3\">\n                    <p *ngFor=\"let message of messages\">\n                        <span *ngIf=\"message.from\">{{message.from.name}} :</span>\n                        {{message.content}}\n                    </p>\n                </div>\n                <div class=\"send-message-container\">\n                    <input [(ngModel)]=\"newMessage\"\n                           class=\"message-input\"\n                           placeholder=\"Message\"\n                           (keydown.enter)=\"sendMessage(newMessage)\">\n                    <button (click)=\"sendMessage(newMessage)\"\n                            type=\"button\"\n                            class=\"float-right\"\n                            id=\"send-button\">\n                        <span class=\"fas fa-paper-plane\"></span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"playlist\">\n                <h3>PLAYLIST</h3>\n                <div class=\"playlist-container\">\n                    <div *ngFor=\"let video of videoHistoryList\" class=\"playlist-item\" (click)=\"playNewVideoById(video.videoId)\">\n                        <img [src]=\"video.videoData.thumbnail\">\n                        <div class=\"video-description\">{{video.videoData.title}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/video-room/video-room.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/video-room/video-room.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".room-view {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.header-button {\n  background-color: transparent;\n  color: white;\n  border: 2px solid white;\n  border-radius: 2px;\n  outline: none; }\n\n.header-button span {\n    font-size: 1rem;\n    font-family: fontawesome; }\n\n.header-button:hover {\n    cursor: pointer; }\n\n.chat {\n  margin-bottom: 16px; }\n\n.chat .chat-output {\n    overflow: scroll;\n    height: 33vh;\n    background-color: black; }\n\n.send-message-container {\n  display: flex;\n  width: 100%; }\n\n.send-message-container #send-button {\n    background-color: black;\n    color: white;\n    outline: none;\n    border-left: 1px solid white;\n    outline: none; }\n\n.send-message-container .fa-paper-plane {\n    font-family: fontawesome;\n    padding: 10px;\n    font-size: 1.3rem; }\n\ninput {\n  outline: none;\n  padding: 10px;\n  color: white;\n  background-color: black;\n  border: none;\n  flex-grow: 1; }\n\n.playlist .playlist-container {\n  width: 100%;\n  overflow: scroll;\n  height: 33vh;\n  background-color: black; }\n\n.playlist .video-description {\n  width: 100%;\n  padding: 5px 0 0 5px; }\n\n.playlist .playlist-item:last-child {\n  border-bottom: none; }\n\n.playlist .playlist-item {\n  display: flex;\n  width: 100%;\n  background-color: black;\n  padding: 10px 0;\n  border-bottom: 1px solid white; }\n\n.playlist .playlist-item :hover {\n    cursor: pointer; }\n\n.playlist .playlist-item span {\n    font-family: fontawesome;\n    color: white; }\n\n.add-video-url-container {\n  display: flex; }\n\n.add-video-url-container button {\n    background-color: black;\n    color: white;\n    outline: none;\n    border-left: 1px solid white;\n    outline: none;\n    padding: 10px 20px; }\n\n.add-video-url-container button span {\n      font-size: 1.3rem;\n      font-family: fontawesome; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvc3luYy13YXRjaC9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXJvb20vdmlkZW8tcm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDdkI7O0FBRUQ7RUFFSSw4QkFBNkI7RUFDN0IsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsY0FBYSxFQVVoQjs7QUFoQkQ7SUFTUSxnQkFBZTtJQUNmLHlCQUF3QixFQUMzQjs7QUFYTDtJQWNRLGdCQUFlLEVBQ2xCOztBQUdMO0VBRUksb0JBQW1CLEVBT3RCOztBQVREO0lBS1EsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWix3QkFBdUIsRUFDMUI7O0FBR0w7RUFFSSxjQUFhO0VBQ2IsWUFBVyxFQWVkOztBQWxCRDtJQU1RLHdCQUF1QjtJQUN2QixhQUFZO0lBQ1osY0FBYTtJQUNiLDZCQUE0QjtJQUM1QixjQUFhLEVBQ2hCOztBQVhMO0lBY1EseUJBQXdCO0lBQ3hCLGNBQWE7SUFDYixrQkFBaUIsRUFDcEI7O0FBR0w7RUFFSSxjQUFhO0VBQ2IsY0FBYTtFQUNiLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLGFBQVksRUFDZjs7QUFFRDtFQUlRLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLHdCQUF1QixFQUMxQjs7QUFSTDtFQVdRLFlBQVc7RUFDWCxxQkFBb0IsRUFDdkI7O0FBYkw7RUFnQlEsb0JBQW1CLEVBQ3RCOztBQWpCTDtFQW9CUSxjQUFhO0VBQ2IsWUFBVztFQUNYLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLCtCQUE4QixFQVVqQzs7QUFsQ0w7SUEyQlksZ0JBQWUsRUFDbEI7O0FBNUJUO0lBK0JZLHlCQUF3QjtJQUN4QixhQUFZLEVBQ2Y7O0FBSVQ7RUFFSSxjQUFhLEVBZWhCOztBQWpCRDtJQUtRLHdCQUF1QjtJQUN2QixhQUFZO0lBQ1osY0FBYTtJQUNiLDZCQUE0QjtJQUM1QixjQUFhO0lBQ2IsbUJBQWtCLEVBTXJCOztBQWhCTDtNQWFZLGtCQUFpQjtNQUNqQix5QkFBd0IsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXJvb20vdmlkZW8tcm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tLXZpZXdcbntcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmhlYWRlci1idXR0b25cbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgc3BhblxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gICAgfVxuICAgICY6aG92ZXJcbiAgICB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5jaGF0XG57XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAuY2hhdC1vdXRwdXRcbiAgICB7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxufVxuXG4uc2VuZC1tZXNzYWdlLWNvbnRhaW5lclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgI3NlbmQtYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuZmEtcGFwZXItcGxhbmVcbiAgICB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxufVxuXG5pbnB1dFxue1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLnBsYXlsaXN0XG57XG4gICAgLnBsYXlsaXN0LWNvbnRhaW5lclxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIC52aWRlby1kZXNjcmlwdGlvblxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDAgNXB4O1xuICAgIH1cbiAgICAucGxheWxpc3QtaXRlbTpsYXN0LWNoaWxkXG4gICAge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICAucGxheWxpc3QtaXRlbVxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgOmhvdmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFkZC12aWRlby11cmwtY29udGFpbmVyXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBidXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgc3BhblxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/video-room/video-room.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/video-room/video-room.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoRoomComponent", function() { return VideoRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interface_event_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/event.interface */ "./src/app/interface/event.interface.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interface_user_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interface/user.interface */ "./src/app/interface/user.interface.ts");
/* harmony import */ var _service_youtube_video_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/youtube-video-data.service */ "./src/app/service/youtube-video-data.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var random_username_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! random-username-generator */ "./node_modules/random-username-generator/index.js");
/* harmony import */ var random_username_generator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(random_username_generator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










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
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(url)) {
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
                _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].NEW_VIDEO, videoData);
            });
            this.newVideoUrl = undefined;
        }
    };
    VideoRoomComponent.prototype.copyInviteLinkToClipboard = function () {
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__(document.location.href);
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
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(text)) {
            var message = {
                from: this.user,
                content: text
            };
            this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SEND_MESSAGE, message);
            this.newMessage = undefined;
        }
    };
    VideoRoomComponent.prototype.playNewVideoById = function (id) {
        this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PLAY_NEW_VIDEO, id);
    };
    VideoRoomComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__(SERVER_URL);
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].CONNECT, function () {
            _this.syncData.clientId = _this.socket.id;
            _this.user = {
                id: _this.syncData.clientId,
                name: random_username_generator__WEBPACK_IMPORTED_MODULE_8__["generate"](),
                role: 'member',
                status: _interface_user_interface__WEBPACK_IMPORTED_MODULE_4__["UserEnum"].JOINING
            };
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].JOIN, _this.syncData.room, _this.user.name);
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ALERT_MEMBERS_NEW_USER, _this.user);
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ASK_VIDEO_INFORMATION, _this.socket.id);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SEND_MESSAGE, function (message) {
            _this.messages.push(message);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PLAY_NEW_VIDEO, function (id) {
            _this.syncData.player.loadVideoById({
                videoId: id,
                startSeconds: 0
            });
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PLAY, function () {
            _this.syncData.player.playVideo();
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PAUSE, function () {
            _this.syncData.player.pauseVideo();
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_TIME, function (time) {
            _this.syncVideoTime(time);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].NEW_VIDEO, function (videoData) {
            _this.videoHistoryList.unshift(videoData);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ASK_VIDEO_INFORMATION, function (socketId) {
            var videoInfo = {
                url: _this.syncData.player.getVideoUrl(),
                time: _this.syncData.player.getCurrentTime()
            };
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_VIDEO_INFORMATION, videoInfo, socketId);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_VIDEO_INFORMATION, function (videoInfo) {
            _this.syncData.player.loadVideoById({
                videoId: _this.getVideoId(videoInfo.url),
                startSeconds: videoInfo.time
            });
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ALERT_MEMBERS_NEW_USER, function (user) {
            _this.currentRoomMember.push(user);
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_CURRENT_ROOM_MEMBER, _this.user, user.id);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_CURRENT_ROOM_MEMBER, function (user) {
            _this.currentRoomMember.push(user);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ASK_VIDEO_TIME, function (socketId) {
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_TIME_ON_JOIN, socketId, _this.syncData.player.getCurrentTime());
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_TIME_ON_JOIN, function (time) {
            _this.syncVideoTime(time);
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ASK_STATUS, function (socketId) {
            _this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_TIME_ON_JOIN, socketId, _this.syncData.player.getPlayerState());
        });
        this.socket.on(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_STATUS, function (status) {
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
                    if (this.user.status === _interface_user_interface__WEBPACK_IMPORTED_MODULE_4__["UserEnum"].JOINING) {
                        this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].ASK_VIDEO_TIME, this.user.id);
                        this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PLAY);
                        this.user.status = _interface_user_interface__WEBPACK_IMPORTED_MODULE_4__["UserEnum"].JOINED;
                    }
                    else {
                        this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].SYNC_TIME, this.syncData.player.getCurrentTime());
                        this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PLAY);
                    }
                    break;
                case 2:
                    this.syncData.socket.emit(_interface_event_interface__WEBPACK_IMPORTED_MODULE_2__["Event"].PAUSE);
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
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(url) && !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.syncData.player)) {
            var idRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
            var videoId = url.split(idRegex)[1];
            return videoId;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VideoRoomComponent.prototype, "room", void 0);
    VideoRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-room',
            template: __webpack_require__(/*! ./video-room.component.html */ "./src/app/components/video-room/video-room.component.html"),
            styles: [__webpack_require__(/*! ./video-room.component.scss */ "./src/app/components/video-room/video-room.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_youtube_video_data_service__WEBPACK_IMPORTED_MODULE_5__["YoutubeVideoDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], VideoRoomComponent);
    return VideoRoomComponent;
}());



/***/ }),

/***/ "./src/app/interface/event.interface.ts":
/*!**********************************************!*\
  !*** ./src/app/interface/event.interface.ts ***!
  \**********************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event;
(function (Event) {
    Event["CONNECT"] = "connect";
    Event["DISCONNECT"] = "disconnect";
    Event["SYNC_TIME"] = "sync-time";
    Event["NEW_VIDEO"] = "new-video";
    Event["ASK_VIDEO_INFORMATION"] = "ask-video-info";
    Event["SYNC_VIDEO_INFORMATION"] = "sync-video-info";
    Event["STATE"] = "state";
    Event["PLAY"] = "play";
    Event["PAUSE"] = "pause";
    Event["JOIN"] = "join";
    Event["SEND_MESSAGE"] = "send-message";
    Event["PLAY_NEW_VIDEO"] = "play-new-video";
    Event["SEND_MAIL"] = "send-mail";
    Event["SYNC_CURRENT_ROOM_MEMBER"] = "sync-current-room-member";
    Event["ALERT_MEMBERS_NEW_USER"] = "alert-members-new-user";
    Event["GET_USER_ROLE"] = "get-user-role";
    Event["ASK_VIDEO_TIME"] = "ask-video-time";
    Event["SYNC_TIME_ON_JOIN"] = "sync-time-on-join";
    Event["ASK_STATUS"] = "ask-status";
    Event["SYNC_STATUS"] = "sync-status";
})(Event || (Event = {}));


/***/ }),

/***/ "./src/app/interface/user.interface.ts":
/*!*********************************************!*\
  !*** ./src/app/interface/user.interface.ts ***!
  \*********************************************/
/*! exports provided: UserEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEnum", function() { return UserEnum; });
var UserEnum;
(function (UserEnum) {
    UserEnum["JOINED"] = "JOINED";
    UserEnum["JOINING"] = "JOINING";
})(UserEnum || (UserEnum = {}));


/***/ }),

/***/ "./src/app/service/youtube-video-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/youtube-video-data.service.ts ***!
  \*******************************************************/
/*! exports provided: YoutubeVideoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoDataService", function() { return YoutubeVideoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var apiKey = 'AIzaSyAFK1fv9hExPRj8Io9nXaVRoHkwzRo0VwM';
var YoutubeVideoDataService = /** @class */ (function () {
    function YoutubeVideoDataService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    }
    YoutubeVideoDataService.prototype.getVideoInfoById = function (videoId) {
        var url = 'https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=' + videoId + '&key=' + apiKey;
        return this.http.get(url, {
            headers: this.headers
        });
    };
    YoutubeVideoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], YoutubeVideoDataService);
    return YoutubeVideoDataService;
}());



/***/ }),

/***/ "./src/app/views/beta-report-view/beta-report-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/beta-report-view/beta-report-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<report-beta></report-beta>"

/***/ }),

/***/ "./src/app/views/beta-report-view/beta-report-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/beta-report-view/beta-report-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: BetaReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetaReportViewComponent", function() { return BetaReportViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BetaReportViewComponent = /** @class */ (function () {
    function BetaReportViewComponent() {
    }
    BetaReportViewComponent.prototype.ngOnInit = function () {
    };
    BetaReportViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'beta-report-view',
            template: __webpack_require__(/*! ./beta-report-view.component.html */ "./src/app/views/beta-report-view/beta-report-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BetaReportViewComponent);
    return BetaReportViewComponent;
}());



/***/ }),

/***/ "./src/app/views/impressum-view/impressum-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/impressum-view/impressum-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<impressum></impressum>"

/***/ }),

/***/ "./src/app/views/impressum-view/impressum-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/impressum-view/impressum-view.component.ts ***!
  \******************************************************************/
/*! exports provided: ImpressumViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumViewComponent", function() { return ImpressumViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumViewComponent = /** @class */ (function () {
    function ImpressumViewComponent() {
    }
    ImpressumViewComponent.prototype.ngOnInit = function () {
    };
    ImpressumViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'impressum-view',
            template: __webpack_require__(/*! ./impressum-view.component.html */ "./src/app/views/impressum-view/impressum-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumViewComponent);
    return ImpressumViewComponent;
}());



/***/ }),

/***/ "./src/app/views/privacy-view/privacy-view.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/privacy-view/privacy-view.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<privacy></privacy>"

/***/ }),

/***/ "./src/app/views/privacy-view/privacy-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/privacy-view/privacy-view.component.ts ***!
  \**************************************************************/
/*! exports provided: PrivacyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyViewComponent", function() { return PrivacyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyViewComponent = /** @class */ (function () {
    function PrivacyViewComponent() {
    }
    PrivacyViewComponent.prototype.ngOnInit = function () {
    };
    PrivacyViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'privacy-view',
            template: __webpack_require__(/*! ./privacy-view.component.html */ "./src/app/views/privacy-view/privacy-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyViewComponent);
    return PrivacyViewComponent;
}());



/***/ }),

/***/ "./src/app/views/start-page-view/start-page-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/start-page-view/start-page-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<start></start>"

/***/ }),

/***/ "./src/app/views/start-page-view/start-page-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/start-page-view/start-page-view.component.ts ***!
  \********************************************************************/
/*! exports provided: StartPageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageViewComponent", function() { return StartPageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartPageViewComponent = /** @class */ (function () {
    function StartPageViewComponent() {
    }
    StartPageViewComponent.prototype.ngOnInit = function () {
    };
    StartPageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'start-view',
            template: __webpack_require__(/*! ./start-page-view.component.html */ "./src/app/views/start-page-view/start-page-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartPageViewComponent);
    return StartPageViewComponent;
}());



/***/ }),

/***/ "./src/app/views/video-room-view/video-room-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/video-room-view/video-room-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video-room [room]=\"room\"></video-room>"

/***/ }),

/***/ "./src/app/views/video-room-view/video-room-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/video-room-view/video-room-view.component.ts ***!
  \********************************************************************/
/*! exports provided: VideoRoomViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoRoomViewComponent", function() { return VideoRoomViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




var VideoRoomViewComponent = /** @class */ (function () {
    function VideoRoomViewComponent(route) {
        this.route = route;
        this.room = '';
    }
    VideoRoomViewComponent.prototype.ngOnInit = function () {
        var snapshot = this.route.snapshot;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(snapshot.paramMap.get('id'))) {
            this.room = snapshot.paramMap.get('id');
        }
    };
    VideoRoomViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-room-view',
            template: __webpack_require__(/*! ./video-room-view.component.html */ "./src/app/views/video-room-view/video-room-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VideoRoomViewComponent);
    return VideoRoomViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/sync-watch/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map