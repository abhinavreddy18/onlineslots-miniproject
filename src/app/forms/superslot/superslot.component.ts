import { Component, OnInit } from '@angular/core';
import { SlotSuper } from 'src/shared/superslot';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-superslot',
  templateUrl: './superslot.component.html',
  styleUrls: ['./superslot.component.css']
})
export class SuperslotComponent implements OnInit {

  
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
  }
  submitForm() {
    console.log(this.form.value.name);
  }

  async fetchDetails(){
    await this.fetchSlotCall().then(
       res => {
         console.log(res);
       }
     );
    }

  fetchSlotCall(){
    const params = new HttpParams();
    params.set('time', this.form.value.time)
    params.set('name', this.form.value.name)
    params.set('type',this.form.value.type)
    params.set('email',this.form.value.email);
    return this.http.get("http://localhost:9080/superslot/",{ params }).toPromise();
  }
}
