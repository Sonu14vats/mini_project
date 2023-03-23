import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './component/login/login.component';
import { UsersComponent } from './component/user/users.component';

const routes: Routes = [
  { path: '' , redirectTo:'/login', pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'users' , component:UsersComponent ,  canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
