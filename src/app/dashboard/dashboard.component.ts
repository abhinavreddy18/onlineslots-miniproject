import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slots } from 'src/shared/slots';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private http: HttpClient) {
    
   }
  display : Slots;
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
  test(){
    console.log();
  }
  async fetchDetails(){
  await this.fetchServiceCall().then(
     res => {
       console.log(res);
     }
   );
  }

  fetchServiceCall(){
    return this.http.get("http://localhost:9080/test").toPromise();
  }
}
