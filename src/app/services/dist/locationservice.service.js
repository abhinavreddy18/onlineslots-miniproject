"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocationserviceService = void 0;
var core_1 = require("@angular/core");
var LocationserviceService = /** @class */ (function () {
    function LocationserviceService(http) {
        this.http = http;
        this.locations = [
            {
                locid: 1,
                name: 'super1',
                lattitude: 2.0,
                longitude: 3.5
            }
        ];
    }
    LocationserviceService.prototype.getlocations = function () {
        console.log("in for banks");
        return this.http.get("http://localhost:9080/test").toPromise();
    };
    LocationserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocationserviceService);
    return LocationserviceService;
}());
exports.LocationserviceService = LocationserviceService;
