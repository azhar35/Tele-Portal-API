import { Component, Input, OnInit } from '@angular/core';
import Device from 'src/app/models/Device';
import { DeviceService } from 'src/app/services/device.service';
import { MydevicesComponent } from '../mydevices.component';

@Component({
  selector: 'app-editdeviceform',
  templateUrl: './editdeviceform.component.html',
  styleUrls: ['./editdeviceform.component.css']
})
export class EditdeviceformComponent implements OnInit {
  
  constructor(private mydev : MydevicesComponent, private devService : DeviceService) { }
  @Input() device!: Device;
  pName !:HTMLInputElement;
  pNum!: HTMLInputElement
  p1: any;
  p2: any;
  ngOnInit(): void {
    this.pName = document.getElementById("pName") as HTMLInputElement;
    this.pNum = document.getElementById("pNum") as HTMLInputElement;
    this.p1 = this.device.device_name;
    this.p2 = this.device.phone_number;
  }

  doSubmit() {
    this.mydev.showEdit = !this.mydev.showEdit;

    this.devService.editDevice(this.device.id, this.p1 , this.p2, this.device.userplan.id).subscribe(res => {this.mydev.ngOnInit()});
  }

}
