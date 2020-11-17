import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/shared/slots';
import { slotconstant } from 'src/shared/slotsconstant';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(private http: HttpClient) { }
  slot: Slots;
  async ngOnInit(){
    this.slot= new Slots();
    await this.fetchSlot();
  }
  async getSlot(){
    console.log(slotconstant);
     return this.http.post("http://localhost:9080/receipt",slotconstant).toPromise();
  }

  async fetchSlot(){
    await this.getSlot().then(
      res=>{
         console.log(res);
      }
    );
  }
}
