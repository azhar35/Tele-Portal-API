import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayuserComponent } from '../displayuser/displayuser.component';
import { LoginComponent } from '../login/login.component';
import { RestapiService } from '../restapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  user1: any;
  user = localStorage.getItem('user');

  constructor(private service:RestapiService, private router: Router) { 

  }

  doLogout() {
    localStorage.setItem('loggedin', "false");
    localStorage.removeItem('user');
    this.router.navigate(["/login"])
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


  // currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  public getCurrentUser(){
    if (localStorage.getItem('user') != null){ 
      this.service.getUser(localStorage.getItem('user')!)
    }else{
    
    }
  }
  }