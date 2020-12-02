import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  fetchSlotCall() {
    console.log("in");
    return this.http.get("http://localhost:9080/admin");
  }
  constructor(private http: HttpClient) { }
}
