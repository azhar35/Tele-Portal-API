import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../models/User';
import { DeviceService } from '../services/device.service';
import { UserService } from '../services/user.service';
import { UserplansService } from '../services/userplans.service';

@Component({
  selector: 'app-myplans',
  templateUrl: './myplans.component.html',
  styleUrls: ['./myplans.component.css']
})
export class MyplansComponent implements OnInit {
  constructor(private service: UserService, private router: Router, private upService: UserplansService, private dService: DeviceService) { }

  currentUsername = localStorage.getItem('user');
  
  currentUser = new User();
  

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') != 'true') {
      localStorage.removeItem('user');
      this.router.navigate(["/login"])
    }
    this.service.getUser(this.currentUsername!).subscribe(result => {
      this.currentUser = result as User;
    })
  }
  doDelete(upid : number) {
    this.upService.removeUserPlan(upid).subscribe(res=> {this.ngOnInit();});
    
  }
   doDeleteDevice() {
    let select = document.getElementById("deviceSelector") as HTMLOptionElement;
    let deviceID = Number(select.value);
    this.dService.deleteDevice(deviceID).subscribe(res=> {this.ngOnInit();});
   }
}