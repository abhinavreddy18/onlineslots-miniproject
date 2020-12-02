import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locidcon } from 'src/shared/locateconstant';

@Injectable({
  providedIn: 'root'
})
export class FetchbankService {
  fetchBanks(){
    
    return this.http.post("http://localhost:9080/fetchbank",locidcon).toPromise();
  }
  constructor(private http: HttpClient) { }
}
