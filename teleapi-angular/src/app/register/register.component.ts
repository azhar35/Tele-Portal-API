import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private service: RestapiService, private router: Router, private login : LoginComponent) { }

  ngOnInit(): void {
  }

  doRegister() {
    this.service.register(this.username,this.password).subscribe(res => {
      this.login.showRegister = false;
      this.login.showLogin = true;
    },
    err => {
      this.username = '';
      this.password = '';
    });
  }

  doBack() {
    this.login.showRegister = false;
    this.login.showLogin = true;
  }
}
