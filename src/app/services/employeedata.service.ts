import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmployeedataService {
  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getEmployee() {
    return this.http.get(this.url + '/employee');
  }

  saveEmployee(data: any) {
    return this.http.post(this.url + '/register', data);
  }
}
