import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locidcon } from 'src/shared/locateconstant';

@Injectable({
  providedIn: 'root'
})
export class FetchsuperService {
  fetchSuper(){
    console.log(locidcon);
    return this.http.post("http://localhost:9080/fetchmarket",locidcon).toPromise();
  }

  constructor(private http: HttpClient) { }
}
