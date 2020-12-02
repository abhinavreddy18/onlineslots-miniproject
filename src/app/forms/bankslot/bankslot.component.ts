import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchbankService } from 'src/app/services/fetchbank.service';
import { Banks } from 'src/shared/bank';
import { locidcon } from 'src/shared/locateconstant';
import { Slots } from 'src/shared/slots';
import { slotconstant } from 'src/shared/slotsconstant';
import { userconst } from 'src/shared/userconstant';

@Component({
  selector: 'app-bankslot',
  templateUrl: './bankslot.component.html',
  styleUrls: ['./bankslot.component.css']
})
export class BankslotComponent implements OnInit {
  form: FormGroup;
  time: Date;
  slot : Slots;
  bank: Banks;
  Fast:boolean;
  normal:boolean;
  nowFormatted: string;
  start:number;
  end:number;
  constructor(private readonly fb: FormBuilder,private http: HttpClient,private fetch: FetchbankService,private router: Router) {
    this.form = this.fb.group({
      name: ['',Validators.required],      
      time: ['',Validators.required],
      duration: ['',Validators.required],
      type:['',Validators.required],
      date:['',Validators.required],
      hours:['',Validators.required],
      min:['',Validators.required]
    });
   }

   s1:Slots;
  async ngOnInit() {
    console.log(locidcon);
    await this.fetchbanks();
    this.Fast=false;
    this.normal=false;
    this.start=parseInt(this.bank.starttime.split(':')[0],10);
    this.end=parseInt(this.bank.endtime.split(':')[0],10);
    this.hours=this.numSequence(this.start,this.end);
  }
  async submitForm() {
    console.log(this.form.getRawValue());
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
    this.slot.duration=this.form.value.duration;
    this.time=new Date();
    this.nowFormatted=formatDate(this.time, 'dd:MM:yyyy:hh:mm', 'en-US');
    let checkdate=this.form.value.date.split('-');
    console.log(this.nowFormatted.split(':'));
    let check1=this.form.value.time.split(':');
    let check2=this.bank.starttime.split(':');
    let check3=this.bank.endtime.split(':');
    let checkdate1=this.nowFormatted.split(':');
    console.log(checkdate);
    console.log(checkdate1);
    console.log(check1);
    if(parseInt(check1[0],10)>parseInt(check2[0],10) && parseInt(check1[0],10)<parseInt(check3[0],10)
      && checkdate[2]>=parseInt(checkdate1[0],10) && checkdate[1]==parseInt(checkdate1[1],10)
      && checkdate[0]==parseInt(checkdate1[2],10) && this.form.value.type=='fasttrack'){
      console.log('in');
      await this.fetchDetails();
      this.router.navigateByUrl("dashboard");
    }
    if(this.form.value.type=='normal' && checkdate[2]>=parseInt(checkdate1[0],10) && checkdate[1]==parseInt(checkdate1[1],10)
    && checkdate[0]==parseInt(checkdate1[2],10)){
      this.slot.time=this.form.value.hours+':'+this.form.value.min;
      await this.fetchDetails();
      this.router.navigateByUrl("dashboard");
    }
   
    console.log(this.form.value);
  }

  async fetchbanks(){
    await this.fetch.fetchBanks().then(
      res=>{
        this.bank= res as Banks;
        console.log(this.bank);
      });
  }

  hours=[];
  mins=[];
  numSequence(n1: number,n2:number): Array<number> { 
    console.log(n1);
    console.log(n2);
    let arr=[];
    let i:number;
    let j:number;
    j=0;
    for(i=n1;i<n2;i++){
      arr[j]=i;
      j++;
    }
    return arr;
  } 

  updateSelect(){
    if(this.form.value.type=='fasttrack'){
      this.Fast=true;
      this.normal=false;
    }
    else{
      this.normal=true;
      this.Fast=false;
    }
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
    return this.http.post("http://localhost:9080/bankslot",this.slot).toPromise();
  }
  updateMins(){
    let i:number;
    for(i=0;i<60/this.form.value.duration;i++){
      this.mins[i]=i*this.form.value.duration;
    }
  }
}
