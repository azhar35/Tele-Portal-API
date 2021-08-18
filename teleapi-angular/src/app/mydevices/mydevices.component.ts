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
  

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') != 'true') {
      localStorage.removeItem('user');
      this.router.navigate(["/login"])
    }
    this.getCurrentUser();
    
  }
  ngDoCheck() {

  }


  public getCurrentUser(){
    if (localStorage.getItem('user') != null){ 
      this.service.getUser(this.currentUsername!).subscribe(result =>{
        this.currentUser = result as User; 
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/login"])
    }

  }
  public getCurrentDevices() {
    let devices: Array<Device> = [];
    for (let up of this.currentUser.userPlans) {
      devices.concat(up.devices);
      console.log("passing device")
    }
  }
}