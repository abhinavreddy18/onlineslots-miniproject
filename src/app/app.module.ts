import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AgmCoreModule } from '@agm/core';

import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SuperhomeComponent } from './supermarkets/superhome/superhome.component';
import { AboutComponent } from './about/about.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { SuperSlotComponent } from './supermarkets/super-slot/super-slot.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SuperlistComponent } from './supermarkets/superlist/superlist.component';
import {  HospitalhomeComponent } from './hospitalhome/hospitalhome.component';
import { HsopitallistComponent } from './hsopitallist/hsopitallist.component';
import { bankhomepageComponent } from './bankhomepage/bankhomepage.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GeojsonComponent } from './geojson/geojson.component';
import { SuperslotComponent } from './forms/superslot/superslot.component';

import { BankslotComponent } from './forms/bankslot/bankslot.component';
import { HospitalComponent } from './forms/hospital/hospital.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { Googlemaps2Component } from './googlemaps2/googlemaps2.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import { Googlemaps3Component } from './googlemaps3/googlemaps3.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AdminComponent } from './admin/admin.component';
import { BanklistComponent } from './banklist/banklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    HomepageComponent,
    SuperhomeComponent,
    AboutComponent,
    GooglemapsComponent,
    SuperSlotComponent,
    ContactComponent,
    SignupComponent,
    SuperlistComponent,
    HospitalhomeComponent,
    HsopitallistComponent,
    bankhomepageComponent,
    ScheduleComponent,
    GeojsonComponent,
    SuperslotComponent,
    BankslotComponent,
    BanklistComponent,
    HospitalComponent,
    TasksComponent,
    TaskbarComponent,
    Googlemaps2Component,
    Googlemaps3Component,
    ReceiptComponent,
    AdminComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    GoogleMapsModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatSelectModule,
    BrowserAnimationsModule,
    OverlayModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCtk4ddxsHWtckMriPvA-jkOVP34oMY4ek",
      libraries: ["places", "geometry"]
      /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
