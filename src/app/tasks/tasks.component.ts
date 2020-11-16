import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/shared/slots';
import { userconst } from 'src/shared/userconstant';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  
  constructor(private tasks: TasksService) { }
  async ngOnInit() {
    await this.getSlots();
  }
  displayslots : Slots[];
  async  getSlots() {
    console.log(userconst);
    await this.tasks.getTasks(userconst).then(
      res=>{
        
        this.displayslots = res as Slots[];
        console.log(this.displayslots);
        
      }
    );
}
}
