import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../models/User';
import UserPlan from '../models/UserPlan';
import { DeviceService } from '../services/device.service';
import { UserService } from '../services/user.service';
import { UserplansService } from '../services/userplans.service';
import { NewdeviceformComponent } from './newdeviceform/newdeviceform.component';

@Component({
  selector: 'app-myplans',
  templateUrl: './myplans.component.html',
  styleUrls: ['./myplans.component.css']
})
export class MyplansComponent implements OnInit {
  constructor(private service: UserService, private router: Router, private upService: UserplansService, private dService: DeviceService) { }

  currentUsername = localStorage.getItem('user');
  currentSelected!: number;
  currentUser = new User();
  showNewDevice = false;
  up!: UserPlan;
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
    this.upService.removeUserPlan(upid).subscribe(res=> {this.ngOnInit()});
    
  }
  doDeleteDevice(did: number) {
    this.dService.deleteDevice(did).subscribe(res=> {this.ngOnInit()});
  }
  public getDeviceSelectorValueByUpId(upid: number) {
    let x = document.getElementById("deviceSelector"+upid) as HTMLOptionElement;
    return Number(x.value);

  }
}