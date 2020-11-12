import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['',Validators.required],      
      time: ['',Validators.required],
      email: ['',Validators.required],
      type:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.form.getRawValue());
  }
}
