import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slots } from 'src/shared/slots';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  slot : Slots;
  constructor(private http: HttpClient) { }
  getTasks(){
    return this.http.get("http://localhost:9080/slotsdisplay").toPromise();
  }
}
