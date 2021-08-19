import { Component, Input, OnInit } from '@angular/core';
import UserPlan from 'src/app/models/UserPlan';
import { MyplansComponent } from '../myplans.component';

@Component({
  selector: 'app-newdeviceform',
  templateUrl: './newdeviceform.component.html',
  styleUrls: ['./newdeviceform.component.css']
})
export class NewdeviceformComponent implements OnInit {
  @Input() up!: UserPlan;
  constructor() { }

  ngOnInit(): void {
  }

}
