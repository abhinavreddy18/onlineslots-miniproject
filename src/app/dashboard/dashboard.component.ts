import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slots } from 'src/shared/slots';
import { userconst } from 'src/shared/userconstant';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private tasks: TasksService) {
    
   }
  display : Slots[];
  async ngOnInit(){
    
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
