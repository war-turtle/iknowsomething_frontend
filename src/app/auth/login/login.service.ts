import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  private apiUrl = environment.devApi;  // URL to web api

  constructor(
    private http: HttpClient) { }

  login(token) {
    return this.http.post(this.apiUrl + '/auth/login', {token}, httpOptions);
  }
}
