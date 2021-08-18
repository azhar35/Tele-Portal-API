import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private service: UserService, private navbar: NavbarComponent) { }
  currentUsername = localStorage.getItem('user');
  currentUser: any;
  

  ngOnInit(): void {
    if (localStorage.getItem('loggedin') != 'true') {
      this.router.navigate(["/login"])
    }
    this.getCurrentUser();
    
  }

  public getCurrentUser(){
    if (localStorage.getItem('user') != null){ 
      this.service.getUser(localStorage.getItem('user')!).subscribe(result =>{
        this.currentUser = result;
        
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/login"])
    }
  }

}
