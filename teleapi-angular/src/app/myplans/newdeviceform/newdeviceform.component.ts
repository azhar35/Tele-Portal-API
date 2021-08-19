import { Component, Input, OnInit } from '@angular/core';
import Device from 'src/app/models/Device';
import UserPlan from 'src/app/models/UserPlan';
import { DeviceService } from 'src/app/services/device.service';
import { MyplansComponent } from '../myplans.component';

@Component({
  selector: 'app-newdeviceform',
  templateUrl: './newdeviceform.component.html',
  styleUrls: ['./newdeviceform.component.css']
})
export class NewdeviceformComponent implements OnInit {
  @Input() up!: UserPlan;
  name!: String;
  phoneNumber!: String;
  constructor(private service: DeviceService, private myPlans : MyplansComponent) { }

  ngOnInit(): void {
  }
  addNewDevice(name:String, phoneNumber:String) {
    this.service.addDevice(name,phoneNumber, this.up).subscribe(res => {this.name = ''; this.phoneNumber = ''; this.myPlans.ngOnInit()});
    name = '';
    phoneNumber = '';
    this.myPlans.showNewDevice = false;
  }
}
