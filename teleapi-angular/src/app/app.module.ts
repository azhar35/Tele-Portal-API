import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './login/loginform.component';
import { RegisterformComponent } from './login/registerform.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AddplanComponent } from './addplan/addplan.component';
import { LoginService } from './services/login.service';
import { MyplansComponent } from './myplans/myplans.component';
import { MydevicesComponent } from './mydevices/mydevices.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    RegisterformComponent,
    MainComponent,
    NavbarComponent,
    AddplanComponent,
    MyplansComponent,
    MydevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,HttpClient, LoginService, LoginformComponent, NavbarComponent, AddplanComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
