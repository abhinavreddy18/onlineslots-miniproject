import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  form: FormGroup;
  constructor(private router:Router,private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['',Validators.required],      
      password: ['',Validators.required,this.validatorPassword]
    });
   }

  ngOnInit(): void {
    
  
  }

  navigateToDashboard(){
    console.log("war");
    this.closebutton.nativeElement.click();
    this.router.navigateByUrl("/dashboard");
  }

  
  navigatetosigup(){
    this.router.navigateByUrl("/signup");
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
  } else {
      console.log('There is a problem with the form');
  }
  }

  validatorPassword(fc: FormControl) {
    const value = fc.value as string;
    const isInvalid = 'password' === value.trim().toLowerCase();
    return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  }
}
