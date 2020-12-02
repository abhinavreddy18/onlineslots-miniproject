import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/shared/slots';
import { userconst } from 'src/shared/userconstant';
import { TasksService } from '../services/tasks.service';
import { FastslotsService } from '../services/fastslots.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  
  constructor(private tasks: TasksService,private fast:FastslotsService) { }
  async ngOnInit() {
    await this.getSlots();
    await this.getfastslots();
  }
  displayslots : Slots[];
  displayfastslots: Slots[];
  async  getSlots() {
    console.log(userconst);
    await this.tasks.getTasks().then(
      res=>{
        
        this.displayslots = res as Slots[];
        console.log(this.displayslots);
        
      }
    );
}

async getfastslots(){
  await this.fast.getFasttasks().then(
    res=>{
      this.displayfastslots=res as Slots[];
      console.log(this.displayfastslots);
    }
  )
}
}
