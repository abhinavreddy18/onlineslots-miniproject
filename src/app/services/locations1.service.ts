import { Injectable } from '@angular/core';
import { Super } from'src/shared/super';
import { HttpClient, HttpParams } from '@angular/common/http';
import { locidcon } from 'src/shared/locateconstant';
import { locate } from 'src/shared/locate';
@Injectable({
  providedIn: 'root'
})
export class Locations1Service {
  
 
  constructor(private http: HttpClient) { }
  async getlocations(){
    let loc=new locate();
    loc.locid=23;
    const params = new HttpParams();
    console.log(locidcon);
    return this.http.post("http://localhost:9080/superlocation",locidcon).toPromise();
  }
}
