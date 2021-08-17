import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplanComponent } from './addplan/addplan.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateplanComponent } from './updateplan/updateplan.component';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path: 'view-plan', component: DisplayuserComponent},
  {path: 'add-plan', component: AddplanComponent},
  {path: 'update-plan',component: UpdateplanComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }