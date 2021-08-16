import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import User from "./models/User";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  constructor(private http:HttpClient) { }


public login(username:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  console.log(username);
  console.log(password);
  return this.http.get("http://localhost:9001/auth",{headers, responseType: 'text' as 'json'})
}

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