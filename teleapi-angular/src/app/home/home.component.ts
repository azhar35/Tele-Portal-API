import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  user = localStorage.getItem('user');

  constructor(private service:RestapiService, private router: Router) { 

  }

  ngOnInit() {
    if(localStorage.getItem('loggedin') != 'true') {
      this.router.navigate(["/login"])
    }
  }

  getUsers(){
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

}