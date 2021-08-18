import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplanComponent } from './addplan/addplan.component';
import { LoginformComponent } from './login/loginform.component';
import { RegisterformComponent } from './login/registerform.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [  
  
{path:"", redirectTo:"login",pathMatch:"full"},
{path:"login", component:LoginformComponent},
{path:"register", component:RegisterformComponent},
{path:"main", component:MainComponent},
{path:"addplan", component:AddplanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
