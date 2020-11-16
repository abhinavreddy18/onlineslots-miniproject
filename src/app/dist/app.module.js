"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var grid_list_1 = require("@angular/material/grid-list");
var list_1 = require("@angular/material/list");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var google_maps_1 = require("@angular/google-maps");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./modules/general/home/home.component");
var not_found_component_1 = require("./modules/general/not-found/not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var login_component_1 = require("./login/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var homepage_component_1 = require("./homepage/homepage.component");
var superhome_component_1 = require("./supermarkets/superhome/superhome.component");
var about_component_1 = require("./about/about.component");
var googlemaps_component_1 = require("./googlemaps/googlemaps.component");
var super_slot_component_1 = require("./supermarkets/super-slot/super-slot.component");
var contact_component_1 = require("./contact/contact.component");
var signup_component_1 = require("./signup/signup.component");
var superlist_component_1 = require("./supermarkets/superlist/superlist.component");
var hospitalhome_component_1 = require("./hospitalhome/hospitalhome.component");
var hsopitallist_component_1 = require("./hsopitallist/hsopitallist.component");
var bankhomepage_component_1 = require("./bankhomepage/bankhomepage.component");
var schedule_component_1 = require("./schedule/schedule.component");
var geojson_component_1 = require("./geojson/geojson.component");
var superslot_component_1 = require("./forms/superslot/superslot.component");
var bankslot_component_1 = require("./forms/bankslot/bankslot.component");
var hospital_component_1 = require("./forms/hospital/hospital.component");
var tasks_component_1 = require("./tasks/tasks.component");
var taskbar_component_1 = require("./taskbar/taskbar.component");
var googlemaps2_component_1 = require("./googlemaps2/googlemaps2.component");
var select_1 = require("@angular/material/select");
var animations_1 = require("@angular/platform-browser/animations");
var overlay_1 = require("@angular/cdk/overlay");
var googlemaps3_component_1 = require("./googlemaps3/googlemaps3.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                not_found_component_1.NotFoundComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                homepage_component_1.HomepageComponent,
                superhome_component_1.SuperhomeComponent,
                about_component_1.AboutComponent,
                googlemaps_component_1.GooglemapsComponent,
                super_slot_component_1.SuperSlotComponent,
                contact_component_1.ContactComponent,
                signup_component_1.SignupComponent,
                superlist_component_1.SuperlistComponent,
                hospitalhome_component_1.HospitalhomeComponent,
                hsopitallist_component_1.HsopitallistComponent,
                bankhomepage_component_1.bankhomepageComponent,
                schedule_component_1.ScheduleComponent,
                geojson_component_1.GeojsonComponent,
                superslot_component_1.SuperslotComponent,
                bankslot_component_1.BankslotComponent,
                hospital_component_1.HospitalComponent,
                tasks_component_1.TasksComponent,
                taskbar_component_1.TaskbarComponent,
                googlemaps2_component_1.Googlemaps2Component,
                googlemaps3_component_1.Googlemaps3Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                button_1.MatButtonModule,
                google_maps_1.GoogleMapsModule,
                list_1.MatListModule,
                form_field_1.MatFormFieldModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                grid_list_1.MatGridListModule,
                select_1.MatSelectModule,
                animations_1.BrowserAnimationsModule,
                overlay_1.OverlayModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
