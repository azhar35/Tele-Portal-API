import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  doLogout() {
    localStorage.removeItem('loggedin');
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }
  doHome() {
    this.router.navigate(["/home"]);
  }
  doAddPlans() {
    this.router.navigate(["/addplan"]);
  }
  doMyDevices() {
    this.router.navigate(["/mydevices"]);
  }
  doMyPlans() {
    this.router.navigate(["/myplans"]);
  }
}
