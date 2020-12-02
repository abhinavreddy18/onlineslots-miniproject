import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Locations1Service } from '../services/locations1.service';
import { Locationsservice2Service } from '../services/locationsservice2.service';
import { Banks } from 'src/shared/bank';
import { location } from 'src/shared/location';
import { locidcon } from 'src/shared/locateconstant';
import { LocationserviceService } from '../services/locationservice.service';


@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit {

  constructor(private readonly fb: FormBuilder,private router: Router, private locationservice: LocationserviceService,private locationservice1: Locationsservice2Service) {
    this.form = this.fb.group({
      location : ['',Validators.required],      
      id : ['',Validators.required],
      
    });
   }

  async ngOnInit() {
    await this.getLocations();
  }
  banks:Banks[];
  
  form: FormGroup;
  locs: location[];
  async updateName() {
    
    locidcon.locid=this.form.value.location;
    
   await this.getLocations1();
   
  }

  async submitForm(){
    locidcon.locid=this.form.value.location;
    locidcon.id=this.form.value.id;
    console.log(locidcon);
    
    console.log(this.form.value);
    this.router.navigateByUrl("bank-form");
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
        
        this.banks = res as Banks[];
        console.log(this.banks);
        
      }
    );
}
}
