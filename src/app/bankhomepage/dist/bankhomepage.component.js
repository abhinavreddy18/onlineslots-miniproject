"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.bankhomepageComponent = void 0;
var core_1 = require("@angular/core");
var bankhomepageComponent = /** @class */ (function () {
    function bankhomepageComponent(router) {
        this.router = router;
    }
    bankhomepageComponent.prototype.ngOnInit = function () {
    };
    bankhomepageComponent.prototype.navigateToGooglemaps = function () {
        this.router.navigateByUrl("/google-map");
    };
    bankhomepageComponent.prototype.navigateTobanklist = function () {
        this.router.navigateByUrl("/bank-list");
    };
    bankhomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-bankhomepage',
            templateUrl: './bankhomepage.component.html',
            styleUrls: ['./bankhomepage.component.css']
        })
    ], bankhomepageComponent);
    return bankhomepageComponent;
}());
exports.bankhomepageComponent = bankhomepageComponent;
