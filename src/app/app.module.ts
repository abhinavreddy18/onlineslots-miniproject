import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps'

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
import { MallshomepageComponent } from './mallshomepage/mallshomepage.component';
import { MallslistComponent } from './mallslist/mallslist.component';


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
    MallshomepageComponent,
    MallslistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    GoogleMapsModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
