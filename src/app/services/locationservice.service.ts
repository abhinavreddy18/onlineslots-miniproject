import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { location } from'src/shared/location';
@Injectable({
  providedIn: 'root'
})
export class LocationserviceService {
  
 locations : location[]=[
   {
    locid:1,
    name:'super1',
    lattitude:2.0,
    longitude:3.5
  }
 ]
  getlocations(){
    console.log("in for banks");
    return this.http.get("http://localhost:9080/test").toPromise();
  }
  constructor(private http: HttpClient) { }
}
