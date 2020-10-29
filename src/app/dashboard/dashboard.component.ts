import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToSuperHome(){
    this.router.navigateByUrl("/super-home");

  }

  navigateToHospitalHome(){
    this.router.navigateByUrl("/hospital-home");

  }

  navigateToMallHome(){
    this.router.navigateByUrl("/mall-home");

  }

  navigateToBankHome(){
    this.router.navigateByUrl("/bank-home");

  }

}
