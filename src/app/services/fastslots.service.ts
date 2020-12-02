import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userconst } from 'src/shared/userconstant';

@Injectable({
  providedIn: 'root'
})
export class FastslotsService {
   getFasttasks(){
    return this.http.post("http://localhost:9080/fastslots",userconst).toPromise();
  }
  constructor(private http:HttpClient) { }
}
