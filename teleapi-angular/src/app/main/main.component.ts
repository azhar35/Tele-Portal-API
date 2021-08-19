import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '../models/User';
import UserPlan from '../models/UserPlan';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser : User = new User();

  constructor(private router: Router, private service: UserService) { }
  currentUsername = localStorage.getItem('user');
  

  
  cost!: number;


  ngOnInit(): void {
    if (localStorage.getItem('loggedin') != 'true') {
      localStorage.removeItem('user');
      this.router.navigate(["/login"])
    }
    this.service.getUser(this.currentUsername!).subscribe(result => {
      this.currentUser = result as User;
      this.cost = this.totalCost()
    })
    
  }

  public totalCost(): number{
    let cost = 0;
    for(var up of this.currentUser.userPlans){
    cost += up.plan.price;
    console.log("String")
    }
    return cost;
  }

}
