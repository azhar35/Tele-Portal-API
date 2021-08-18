import { Component, OnInit } from '@angular/core';
import { LoginformComponent } from './loginform.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  username: any;
  password: any;
  constructor(private service: UserService,  private login: LoginformComponent, private router: Router) {
   }

  ngOnInit(): void {
    if(localStorage.getItem('loggedin') == 'true') {
      this.router.navigate(["/main"])
    }
  }
  doRegister() {
    this.service.register(this.username,this.password).subscribe(res => {
      this.router.navigate(["/login"])
    },
    err => {
      this.username = '';
      this.password = '';
    });
  }

  doBack() {
    this.router.navigate(["/login"])
  }

}
