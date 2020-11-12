import { Component, OnInit } from '@angular/core';
import { SlotSuper } from 'src/shared/superslot';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-superslot',
  templateUrl: './superslot.component.html',
  styleUrls: ['./superslot.component.css']
})
export class SuperslotComponent implements OnInit {
  
  constructor(private readonly fb: FormBuilder) { 
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
    console.log(this.form.getRawValue());
  }

}
