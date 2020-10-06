import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superhome',
  templateUrl: './superhome.component.html',
  styleUrls: ['./superhome.component.css']
})
export class SuperhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateToGooglemaps(){

    
    this.router.navigateByUrl("/google-map");
  }

  navigateToList(){
    this.router.navigateByUrl("/super-list");
  }

}
