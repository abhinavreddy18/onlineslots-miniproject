import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/shared/user';
import { HttpClient } from '@angular/common/http';

import { userconst } from 'src/shared/userconstant';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  form: FormGroup;
  constructor(private router:Router,private readonly fb: FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      username: ['',Validators.required],      
      password: ['',Validators.required]
    });
   }
   user: User;
  ngOnInit(): void {
     this.user =new User();
    
  }

  async fetchUser(){
    return  this.http.post("http://localhost:9080/login",this.user).toPromise();
  }
  async navigateToDashboard(){
   console.log(this.form.value.username);
    this.user.username=this.form.value.username;
    this.user.password=this.form.value.password;
    userconst.username=this.form.value.username;
    userconst.password=this.form.value.password;
    this.user.valid=0;
    await this.fetchUser().then(
      res=>{
        this.user= res as User;
      }
    );
    userconst.id=this.user.id;
    console.log(this.user);
    console.log(userconst);
    if(this.user.valid=1){
    this.router.navigateByUrl("/dashboard");
    }
  }

  
  navigatetosigup(){
    this.router.navigateByUrl("/signup");
  }

  submitForm() {
    if (this.form.valid) {
      this.navigateToDashboard();
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
