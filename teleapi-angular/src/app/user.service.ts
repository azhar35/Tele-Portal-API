import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  url = 'http://localhost:9001/users';
  dataCache: Array<User>;

  constructor(private http: HttpClient) {
    this.dataCache = [];
   }

  findAllUsers(): Observable<any> {
    return this.http.get('http://localhost:9001/users');
  }
  
  displayUser(): Observable<any> {
    return this.http.get(this.url + '/user/{id}');
  }


}
