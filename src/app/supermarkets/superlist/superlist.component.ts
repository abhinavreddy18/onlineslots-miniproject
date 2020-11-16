import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { locidcon } from 'src/shared/locateconstant';
import { Router } from '@angular/router';
import { Super } from'src/shared/super';

import { Locations1Service } from 'src/app/services/locations1.service';
import { location } from 'src/shared/location';
import { LocationserviceService } from 'src/app/services/locationservice.service';
@Component({
  selector: 'app-superlist',
  templateUrl: './superlist.component.html',
  styleUrls: ['./superlist.component.css']
})
export class SuperlistComponent implements OnInit {

  constructor(private readonly fb: FormBuilder,private router: Router, private locationservice: LocationserviceService,private locationservice1: Locations1Service) {
    this.form = this.fb.group({
      location : ['',Validators.required],      
      id : ['',Validators.required],
      
    });
   }
  form: FormGroup;
  locs: location[];
  name={value:""};
  markets :Super[];
 
  async ngOnInit() {
    await this.getLocations();
    
  }

  async updateName() {
    
    locidcon.locid=this.form.value.location;
    
   await this.getLocations1();
   
  }

  async submitForm(){
    locidcon.locid=this.form.value.location;
    locidcon.id=this.form.value.id;
    console.log(locidcon);
    
    console.log(this.form.value);
    this.router.navigateByUrl("super-form");
  }

  async getLocations() {
    await this.locationservice.getlocations().then(
      res => {

        this.locs = res as location[];
        console.log(this.locs);

      }
    );
      

  }
  async  getLocations1() {
    await this.locationservice1.getlocations().then(
      res=>{
        
        this.markets = res as Super[];
        console.log(this.markets);
        
      }
    );
}
}
