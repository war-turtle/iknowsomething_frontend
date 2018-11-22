import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
};

@Injectable()
export class AuthServiceClass {

  private apiUrl = environment.devApi;  // URL to web api

  constructor(
    private http: HttpClient) { }

  login(token) {
    return this.http.post(this.apiUrl + '/auth/login', { token }, httpOptions);
  }

  onBoard(data) {
    return this.http.post(this.apiUrl + '/auth/onboard', { data }, httpOptions);
  }
}
