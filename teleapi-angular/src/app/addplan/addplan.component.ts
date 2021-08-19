import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../models/User';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { UserService } from '../services/user.service';
import { UserplansService } from '../services/userplans.service';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  constructor(private service:UserService, private router:Router, private planService:UserplansService) {}

  currentUsername = localStorage.getItem('user');
  currentUser: User = new User();
  

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
        this.currentUser = result as User;
        
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/login"])
    }
  }

  //! the plan ids are hardcoded, so may need changing depending on configuration
  public addBasic() {
    this.planService.addUserPlan(this.currentUser.id, 1);
    window.alert("Plan added!");
  }
  public addPremium() {
    this.planService.addUserPlan(this.currentUser.id, 2);
    window.alert("Plan added!");
  }
  public addUltimate() {
    this.planService.addUserPlan(this.currentUser.id, 3);
    window.alert("Plan added!");
  }
}
