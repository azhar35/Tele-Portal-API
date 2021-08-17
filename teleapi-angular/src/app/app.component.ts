import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teleapi-angular';

  constructor(private router:Router) { }
  doLogout() {
    localStorage.setItem('loggedin', "false");
    localStorage.removeItem('user');
    this.router.navigate(["/login"])
  }
}

