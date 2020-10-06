import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospitalhome',
  templateUrl: './hospitalhome.component.html',
  styleUrls: ['./hospitalhome.component.css']
})
export class HospitalhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  navigateToGooglemaps(){

    
    this.router.navigateByUrl("/google-map");
  }

  navigateToHospitalList(){
    this.router.navigateByUrl("/hospital-list");
  }
}
