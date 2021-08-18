import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;
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

  public getCurrentUser(){
    if (localStorage.getItem('user') != null){ 
      this.getUser(localStorage.getItem('user')!).subscribe(result =>{
        this.currentUser = result;
        
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/login"])
    }
  }

  public loginVerSet() {
    if (localStorage.getItem('loggedin') != 'true') {
      localStorage.clearItem('user');
      this.router.navigate(["/login"])
    }
    this.getCurrentUser();
  }
}

