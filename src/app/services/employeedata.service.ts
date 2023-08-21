import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  url = "http://localhost:8080/api/employee";

  constructor(private http:HttpClient) { }

  employee(){
    return this.http.get(this.url);
  }
  
  // saveEmployee(data:any){
  //   return this.http.post(this.url, data);
  // }

}
