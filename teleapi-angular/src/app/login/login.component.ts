import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message:any
  showRegister = false;
  showLogin = true;

  constructor(private service:RestapiService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') == 'true') {
    // commenting to test  
    //  this.router.navigate(["/home"])
    }
  }

  doLogin(){
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      // to logout "false"
      localStorage.setItem('loggedin', "true");
      localStorage.setItem('user', this.username);
      this.router.navigate(["/home"])
    },
    err => {
      this.username ='';
      this.password ='';
      localStorage.setItem('loggedin', "false");
      localStorage.removeItem('user');
    });

  }

  

  doRegister() {
    this.showLogin = false;
    this.showRegister = true;
  }
}