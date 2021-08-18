import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  constructor(private service:UserService, private router:Router) {}

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
        
      })
    }else{
      localStorage.setItem('loggedin', "false");
      this.router.navigate(["/login"])
    }
  }
  public addBasic() {

  }
  public addPremium() {

  }
  public addUltimate() {

  }
}
