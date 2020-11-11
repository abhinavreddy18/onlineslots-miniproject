import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bankhomepage',
  templateUrl: './bankhomepage.component.html',
  styleUrls: ['./bankhomepage.component.css']
})
export class bankhomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  navigateToGooglemaps(){

    
    this.router.navigateByUrl("/google-map");
  }

  navigateTobanklist(){
    this.router.navigateByUrl("/bank-form");
  }
}
