import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superlist',
  templateUrl: './superlist.component.html',
  styleUrls: ['./superlist.component.css']
})
export class SuperlistComponent implements OnInit {

  constructor() { }

  name={value:""};
 
  ngOnInit(): void {
    
  }

  updateName() {
    this.name.value='Nancy';
  }



}
