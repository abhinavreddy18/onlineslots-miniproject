import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('closebutton') closebutton;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard(){
    console.log("war");
    this.closebutton.nativeElement.click();
    this.router.navigateByUrl("/dashboard");
  }
}
