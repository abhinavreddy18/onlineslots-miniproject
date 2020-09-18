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
    path: 'about', component: AboutComponent,
  },
  
  {
    path: 'super-home', component: SuperhomeComponent,
  },

  {
    path: 'google-map', component: GooglemapsComponent,
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