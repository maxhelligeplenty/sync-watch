"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var socketIo = require("socket.io-client");
var event_interface_1 = require("./../../interface/event.interface");
var core_1 = require("@angular/core");
var ReportBetaComponent = /** @class */ (function () {
    function ReportBetaComponent() {
    }
    ReportBetaComponent.prototype.sendMailToServer = function () {
        this.socket.emit(event_interface_1.Event.SEND_MAIL);
    };
    ReportBetaComponent.prototype.ngOnInit = function () {
        this.socket = socketIo('localhost:1337');
    };
    ReportBetaComponent = __decorate([
        core_1.Component({
            selector: 'report-beta',
            templateUrl: './report-beta.component.html',
            styleUrls: ['./report-beta.component.scss']
        })
    ], ReportBetaComponent);
    return ReportBetaComponent;
}());
exports.ReportBetaComponent = ReportBetaComponent;

//# sourceMappingURL=report-beta.component.js.map
