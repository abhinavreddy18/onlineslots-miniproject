import { Component, OnInit } from '@angular/core';
import { SlotSuper } from 'src/shared/superslot';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { locidcon } from 'src/shared/locateconstant';
import { Slots } from 'src/shared/slots';

@Component({
  selector: 'app-superslot',
  templateUrl: './superslot.component.html',
  styleUrls: ['./superslot.component.css']
})
export class SuperslotComponent implements OnInit {

  slot : Slots;
  constructor(private readonly fb: FormBuilder,private http: HttpClient) { 
    this.form = this.fb.group({
      name: ['',Validators.required],      
      time: ['',Validators.required],
      email: ['',Validators.required],
      type:['',Validators.required]
    });
  }
  s : SlotSuper;
  
  form: FormGroup;
  ngOnInit(): void {
    console.log(locidcon);
  }
  submitForm() {
    console.log(this.form.value.name);
     this.slot= new Slots();
    this.slot.locid=locidcon.id;
    this.slot.type=this.form.value.type;
    this.slot.otp=0;
    this.slot.longitude=0;
    this.slot.lattitude=0;
    this.slot.id=0;
    this.slot.userid=0;
    console.log(this.slot);
    this.fetchSlotCall();
  }

  async fetchDetails(){
    await this.fetchSlotCall().then(
       res => {
         console.log(res);
       }
     );
    }

  fetchSlotCall(){
    return this.http.post("http://localhost:9080/superslot",this.slot).toPromise();
  }
}
