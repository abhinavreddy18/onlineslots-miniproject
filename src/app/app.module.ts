import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    GoogleMapsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
