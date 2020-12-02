import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SuperhomeComponent } from './supermarkets/superhome/superhome.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from'./signup/signup.component';
import { SuperlistComponent } from './supermarkets/superlist/superlist.component'
import {  HospitalhomeComponent } from './hospitalhome/hospitalhome.component';
import { HsopitallistComponent } from './hsopitallist/hsopitallist.component';
import { bankhomepageComponent } from './bankhomepage/bankhomepage.component';
import { SuperslotComponent } from './forms/superslot/superslot.component';
import { BankslotComponent } from './forms/bankslot/bankslot.component';
import { HospitalComponent } from './forms/hospital/hospital.component';
import { Googlemaps2Component } from './googlemaps2/googlemaps2.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AdminComponent } from './admin/admin.component';

import { BanklistComponent } from './banklist/banklist.component';
const routes: Routes = [
  { path: '', component: HomepageComponent, },
  {
    path: 'reference', component: HomeComponent,
    
  },
  
  {
    path: 'dashboard', component: DashboardComponent,
  },

  {
    path: 'signin', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },

  {
    path: 'about', component: AboutComponent,
  },
  
  {
    path: 'super-home', component: SuperhomeComponent,
  },

  {
    path: 'google-map', component: GooglemapsComponent,
  },

  
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: 'super-list', component: SuperlistComponent,
  },
  {
    path:'bank-list',component: BanklistComponent,
  },
  {
    path: 'hospital-home', component:  HospitalhomeComponent,
  },
  {
    path:'hospital-list', component: HsopitallistComponent,
  },
  {
    path: 'bank-home', component: bankhomepageComponent,
  },
  {
    path: 'super-form',component: SuperslotComponent,
  },
  {
    path: 'bank-form',component: BankslotComponent,
  },
  {
    path:'hospital-form',component: HospitalComponent,
  },
  {
    path:'map-2',component: Googlemaps2Component,
  },
  {
    path:'receipt',component: ReceiptComponent,
  },
  {
    path:'admin',component:AdminComponent,
  },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'contact-ref',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about-ref',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'signin-ref',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  
  { path: '**', component: NotFoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
