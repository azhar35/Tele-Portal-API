import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

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

public getUser(){
  let username = "hello";
  let password = "changingpassword";
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get("http://localhost:9001/users/user/1",{headers})
}




}