import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  service: UserService;
  constructor(service: UserService) { 

    this.service = service;
  }

  ngOnInit(): void {
  }

}


