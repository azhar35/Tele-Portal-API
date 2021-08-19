import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  username: any;
  password: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedin') == 'true') {
      this.router.navigate(["/main"])
    }
  }
  doLogin() {
    let resp = this.loginService.login(this.username,this.password);
    resp.subscribe( 
      
      data => {
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('user',this.username);
        this.router.navigate(["/main"])
      }, 
      
      err => {
        this.username = '';
        this.password = '';
      } )
  }
  doRegister() {
    this.router.navigate(["/register"]);
  }
}
