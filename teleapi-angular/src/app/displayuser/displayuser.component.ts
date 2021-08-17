import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import User from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  userList: Array<User> = [];
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.service.displayUser().subscribe(result => {
      console.log(result);
      this.userList = result;
    })
  }

  

}
