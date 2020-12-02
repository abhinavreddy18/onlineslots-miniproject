import { Component, OnInit } from '@angular/core';
import { SlotSuper } from 'src/shared/superslot';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { locidcon } from 'src/shared/locateconstant';
import { Slots } from 'src/shared/slots';
import { userconst } from 'src/shared/userconstant';
import { slotconstant } from 'src/shared/slotsconstant';
import { Router } from '@angular/router';
import { Super } from 'src/shared/super';
import { FetchsuperService } from'src/app/services/fetchsuper.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-superslot',
  templateUrl: './superslot.component.html',
  styleUrls: ['./superslot.component.css']
})
export class SuperslotComponent implements OnInit {

  time: Date;
  slot : Slots;
  super: Super;
  Fast:boolean;
  normal:boolean;
  nowFormatted: string;
  start:number;
  end:number;
  constructor(private readonly fb: FormBuilder,private http: HttpClient, private router: Router,
    private fetch:FetchsuperService) { 
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
  s : SlotSuper;
  s1:Slots;
  form: FormGroup;
  async ngOnInit(){
    console.log(locidcon);
    await this.fetchmarket();
    this.Fast=false;
    this.normal=false;
    this.start=parseInt(this.super.starttime.split(':')[0],10);
    this.end=parseInt(this.super.endtime.split(':')[0],10);
    this.hours=this.numSequence(this.start,this.end);
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
    this.slot.duration=this.form.value.duration;
    this.time=new Date();
    this.nowFormatted=formatDate(this.time, 'dd:MM:yyyy:hh:mm', 'en-US');
    let checkdate=this.form.value.date.split('-');
    console.log(this.nowFormatted.split(':'));
    let check1=this.form.value.time.split(':');
    let check2=this.super.starttime.split(':');
    let check3=this.super.endtime.split(':');
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
    //this.router.navigateByUrl("receipt");
    
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
  async fetchmarket(){
    await this.fetch.fetchSuper().then(
      res=>{
        this.super= res as Super;
        console.log(this.super);
      }
    )
    
    
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
  updateMins(){
    let i:number;
    for(i=0;i<60/this.form.value.duration;i++){
      this.mins[i]=i*this.form.value.duration;
    }
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
}
