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

  loaded = false;
 
  constructor(private service:RestapiService, private router: Router) { 

  }


  ngOnInit() {
    if(localStorage.getItem('loggedin') != 'true') {
      this.router.navigate(["/login"])
    }
    this.getCurrentUser();
    this.loaded = true;
  }

  
  getUsers(){
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

  

  // currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  public getCurrentUser(){
    if (localStorage.getItem('user') != null){ 
      this.service.getUser(localStorage.getItem('user')!).subscribe(result =>{
        this.user1 = result;
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/home"])
    }
  }
  }