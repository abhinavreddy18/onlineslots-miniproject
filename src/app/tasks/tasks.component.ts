import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/shared/slots';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  display : Slots[]=
   [ {name: 'abhinav',
    type: 'fasttrack',
    time: '09/10/2020',
    otp: 20,
    location: 'hyderabad'}];

  constructor() { }
  ngOnInit(): void {
  }

}
