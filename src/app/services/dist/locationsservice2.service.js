"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Locationsservice2Service = void 0;
var core_1 = require("@angular/core");
var locateconstant_1 = require("src/shared/locateconstant");
var Locationsservice2Service = /** @class */ (function () {
    function Locationsservice2Service(http) {
        this.http = http;
    }
    Locationsservice2Service.prototype.getlocations = function () {
        return this.http.post("http://localhost:9080/banklocation", locateconstant_1.locidcon).toPromise();
    };
    Locationsservice2Service = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], Locationsservice2Service);
    return Locationsservice2Service;
}());
exports.Locationsservice2Service = Locationsservice2Service;
