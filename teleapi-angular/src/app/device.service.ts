import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) { }


  public login(username:string,password:string){
    const headers=new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
    return this.http.get("http://localhost:9001/auth",{headers, responseType: 'text' as 'json'})
  }
}
