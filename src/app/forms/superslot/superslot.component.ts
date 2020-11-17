import { Component, OnInit } from '@angular/core';
import { SlotSuper } from 'src/shared/superslot';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { locidcon } from 'src/shared/locateconstant';
import { Slots } from 'src/shared/slots';
import { userconst } from 'src/shared/userconstant';
import { slotconstant } from 'src/shared/slotsconstant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-superslot',
  templateUrl: './superslot.component.html',
  styleUrls: ['./superslot.component.css']
})
export class SuperslotComponent implements OnInit {

  slot : Slots;
  constructor(private readonly fb: FormBuilder,private http: HttpClient, private router: Router) { 
    this.form = this.fb.group({
      name: ['',Validators.required],      
      time: ['',Validators.required],
      duration: ['',Validators.required],
      type:['',Validators.required],
      date:['',Validators.required]
    });
  }
  s : SlotSuper;
  s1:Slots;
  form: FormGroup;
  ngOnInit(): void {
    console.log(locidcon);
  }
  async submitForm() {
    this.slot= new Slots();
    console.log(this.form.value.time);
    this.slot.time=this.form.value.time;
    console.log(this.slot.time);
     this.slot= new Slots();
    this.slot.locid=locidcon.id;
    this.slot.type=this.form.value.type;
    this.slot.otp=0;
    this.slot.longitude=0;
    this.slot.lattitude=0;
    this.slot.id=0;
    this.slot.userid=userconst.id;
    this.slot.date=this.form.value.date;
    this.slot.time=this.form.value.time;
    await this.fetchDetails();
    console.log(this.s1);
    //this.router.navigateByUrl("receipt");
    this.router.navigateByUrl("dashboard");
  }

  async fetchDetails(){
    
    await this.fetchSlotCall().then(
       res => {
         
         this.s1=res as Slots;
         slotconstant.id=this.s1.id;
        
       }
     );
    }

  fetchSlotCall(){
    return this.http.post("http://localhost:9080/superslot",this.slot).toPromise();
  }
}
