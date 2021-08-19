import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import Device  from '../models/Device';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient, private router: Router) { }

  public getUser(username: String){
    return this.http.get("http://localhost:9001/users/user?name=" + username, {responseType: 'json'});
  }
  
  public getAllUsers() {
    return this.http.get("http://localhost:9001/users");
  }
  public register(username:string, password:string) {
    return this.http.post("http://localhost:9001/users/user", {"username":username, "password":password});
  }

}
