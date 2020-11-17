import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slots } from 'src/shared/slots';
import { User } from 'src/shared/user';
import { userconst } from 'src/shared/userconstant';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  slot : Slots;
  constructor(private http: HttpClient) { }
  getTasks(){
    console.log(userconst);
    console.log("send");
    return this.http.post("http://localhost:9080/slots",userconst).toPromise();
  }
}
