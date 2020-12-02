"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./modules/general/home/home.component");
var not_found_component_1 = require("./modules/general/not-found/not-found.component");
var login_component_1 = require("./login/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var homepage_component_1 = require("./homepage/homepage.component");
var about_component_1 = require("./about/about.component");
var superhome_component_1 = require("./supermarkets/superhome/superhome.component");
var googlemaps_component_1 = require("./googlemaps/googlemaps.component");
var contact_component_1 = require("./contact/contact.component");
var signup_component_1 = require("./signup/signup.component");
var superlist_component_1 = require("./supermarkets/superlist/superlist.component");
var hospitalhome_component_1 = require("./hospitalhome/hospitalhome.component");
var hsopitallist_component_1 = require("./hsopitallist/hsopitallist.component");
var bankhomepage_component_1 = require("./bankhomepage/bankhomepage.component");
var superslot_component_1 = require("./forms/superslot/superslot.component");
var bankslot_component_1 = require("./forms/bankslot/bankslot.component");
var hospital_component_1 = require("./forms/hospital/hospital.component");
var googlemaps2_component_1 = require("./googlemaps2/googlemaps2.component");
var receipt_component_1 = require("./receipt/receipt.component");
var admin_component_1 = require("./admin/admin.component");
var banklist_component_1 = require("./banklist/banklist.component");
var routes = [
    { path: '', component: homepage_component_1.HomepageComponent },
    {
        path: 'reference', component: home_component_1.HomeComponent
    },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'signin', component: login_component_1.LoginComponent
    },
    {
        path: 'signup', component: signup_component_1.SignupComponent
    },
    {
        path: 'about', component: about_component_1.AboutComponent
    },
    {
        path: 'super-home', component: superhome_component_1.SuperhomeComponent
    },
    {
        path: 'google-map', component: googlemaps_component_1.GooglemapsComponent
    },
    {
        path: 'contact', component: contact_component_1.ContactComponent
    },
    {
        path: 'super-list', component: superlist_component_1.SuperlistComponent
    },
    {
        path: 'bank-list', component: banklist_component_1.BanklistComponent
    },
    {
        path: 'hospital-home', component: hospitalhome_component_1.HospitalhomeComponent
    },
    {
        path: 'hospital-list', component: hsopitallist_component_1.HsopitallistComponent
    },
    {
        path: 'bank-home', component: bankhomepage_component_1.bankhomepageComponent
    },
    {
        path: 'super-form', component: superslot_component_1.SuperslotComponent
    },
    {
        path: 'bank-form', component: bankslot_component_1.BankslotComponent
    },
    {
        path: 'hospital-form', component: hospital_component_1.HospitalComponent
    },
    {
        path: 'map-2', component: googlemaps2_component_1.Googlemaps2Component
    },
    {
        path: 'receipt', component: receipt_component_1.ReceiptComponent
    },
    {
        path: 'admin', component: admin_component_1.AdminComponent
    },
    {
        path: 'bootstrap-prototype',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module'); }).then(function (mod) { return mod.ExampleBootstrapPrototypeModule; }); }
    },
    {
        path: 'contact-ref',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/general/contact/contact.module'); }).then(function (mod) { return mod.ContactModule; }); }
    },
    {
        path: 'about-ref',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/general/about/about.module'); }).then(function (mod) { return mod.AboutModule; }); }
    },
    {
        path: 'signin-ref',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/general/signin/signin.module'); }).then(function (mod) { return mod.SigninModule; }); }
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
