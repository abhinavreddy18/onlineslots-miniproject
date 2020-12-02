import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Slots } from 'src/shared/slots';
import { timer, Observable, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { AdminService } from '../services/admin.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  slot : Slots;
  subscription: Subscription;
  subscription1: Subscription;
  time: Date;
statusText: string;
  constructor(private readonly fb: FormBuilder,private admin:AdminService) {
    this.form = this.fb.group({
      slotid: ['',Validators.required], 
      otp:['',Validators.required]
    });
   }
   form: FormGroup;
   s1:Slots[];
   s2:Slots[];
  ngOnInit(): void {
    
    this.subscription = timer(0, 60000).pipe(
      switchMap(() => this.admin.fetchSlotCall())
    ).subscribe(result => this.s1 = result as Slots[]);

    this.subscription1 = timer(0, 60000).pipe(
      switchMap(() => this.admin.fetchSlotCall())
    ).subscribe(result => this.s2 = result as Slots[]);

   /*  this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.admin.fetchSlotCall());
    ).subscribe(result => this.s1 = result); */
  }

  check:Slots;
  status: boolean;
  nowFormatted: string;
  async submitForm() {
    this.status=false;
    this.time=new Date();
    this.nowFormatted=formatDate(this.time, 'HH:mm','en-US')
    console.log(this.nowFormatted);
    this.check=this.s1.find(s=>s.id==this.form.value.slotid);
    console.log(this.s1);
    if(this.check.otp==this.form.value.otp && this.check.time==this.nowFormatted){
      this.status=true;
      console.log(this.check);
    }
  }

 

  

}
