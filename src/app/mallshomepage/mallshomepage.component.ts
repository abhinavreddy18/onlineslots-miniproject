import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mallshomepage',
  templateUrl: './mallshomepage.component.html',
  styleUrls: ['./mallshomepage.component.css']
})
export class mallshomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  navigateToGooglemaps(){

    
    this.router.navigateByUrl("/google-map");
  }

  navigateTomallslist(){
    this.router.navigateByUrl("/malls-list");
  }
}
