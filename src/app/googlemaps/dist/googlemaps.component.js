"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.GooglemapsComponent = void 0;
var core_1 = require("@angular/core");
var locateconstant_1 = require("src/shared/locateconstant");
var mymap;
var GooglemapsComponent = /** @class */ (function () {
    function GooglemapsComponent(router, locationservice) {
        this.router = router;
        this.locationservice = locationservice;
    }
    GooglemapsComponent.prototype.getLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationservice.getlocations().then(function (res) {
                            _this.locs = res;
                            console.log(_this.locs);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GooglemapsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var marker;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocations()];
                    case 1:
                        _a.sent();
                        mymap = L.map('mapid').setView([30, 100], 16);
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(mymap);
                        console.log('my map');
                        L.marker([51.5, -0.09]).addTo(mymap)
                            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
                        marker = L.marker([51.4, -0.09]).addTo(mymap).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
                        marker.on('click', function onClick() {
                            locateconstant_1.locidcon.locid = 24;
                            this.router.navigateByUrl("/map-2");
                        }.bind(this));
                        this.setmap();
                        return [2 /*return*/];
                }
            });
        });
    };
    GooglemapsComponent.prototype.setmap = function () {
        var i;
        var circle = {};
        console.log(this.locs);
        for (i = 0; i < this.locs.length; i++) {
            circle[i] = L.marker([this.locs[i].lattitude, this.locs[i].longitude]).bindTooltip(this.locs[i].name, { permanent: true }).addTo(mymap);
            circle[i].on('click', function (e) {
                console.log('in');
                var res = this.locs.find(function (locat) { return locat.lattitude == e.latlng.lat && locat.longitude == e.latlng.lng; });
                locateconstant_1.locidcon.locid = res.locid;
                console.log(e.latlng.lat);
                console.log(e.latlng.lng);
                //locidcon.locid = this.locat.locid;
                //this.router.navigateByUrl("/map-2");
                this.router.navigateByUrl("map-2");
            }.bind(this));
        }
        console.log(circle);
    };
    GooglemapsComponent = __decorate([
        core_1.Component({
            selector: 'app-googlemaps',
            templateUrl: './googlemaps.component.html',
            styleUrls: ['./googlemaps.component.css']
        })
    ], GooglemapsComponent);
    return GooglemapsComponent;
}());
exports.GooglemapsComponent = GooglemapsComponent;
