import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Device from '../models/Device';
import User from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.css']
})
export class MydevicesComponent implements OnInit {
  
  constructor(private service: UserService, private router:Router) { }
  
  currentUser: User = new User();
  currentDevices: Array<Device> = [];
  currentUsername = localStorage.getItem('user');
  showEdit = false;
  device!: Device

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') != 'true') {
      localStorage.removeItem('user');
      this.router.navigate(["/login"])
    }
    this.service.getUser(this.currentUsername!).subscribe(result => {
      this.currentUser = result as User;
    })
    
  }
  ngDoCheck() {

  }
  doEdit(device: Device) {
    this.device = device;
  }

}