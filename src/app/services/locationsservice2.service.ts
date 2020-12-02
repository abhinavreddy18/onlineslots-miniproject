import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locidcon } from 'src/shared/locateconstant';

@Injectable({
  providedIn: 'root'
})
export class Locationsservice2Service {
  getlocations(){
    return this.http.post("http://localhost:9080/banklocation",locidcon).toPromise();
  }
  constructor(private http: HttpClient) { }
}
