import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-myplans',
  templateUrl: './myplans.component.html',
  styleUrls: ['./myplans.component.css']
})
export class MyplansComponent implements OnInit {
  constructor(private service: UserService, private router: Router) { }

  currentUsername = localStorage.getItem('user');
  currentUser: any;
  

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') != 'true') {
      localStorage.removeItem('user');
      this.router.navigate(["/login"])
    }
    this.getCurrentUser();
  }

  public getCurrentUser(){
    if (localStorage.getItem('user') != null){ 
      this.service.getUser(localStorage.getItem('user')!).subscribe(result =>{
        this.currentUser = result;
        console.log(result)
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/login"])
    }
  }

}
