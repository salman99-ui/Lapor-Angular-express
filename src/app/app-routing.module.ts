import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { FileComponent } from './file/file.component';



const routes: Routes = [
  {path : '' , component : HomeComponent , canActivate : [AuthGuard] } ,
  {path : 'create' , component : InputComponent , canActivate : [AuthGuard]} ,
  {path : 'test/:id' , component :DetailComponent} ,
  {path : 'login' , component :LoginComponent} , 
  {path : 'register' , component : RegisterComponent},
  {path : 'file' , component : FileComponent} ,
  {path : '**' , component : NotfoundComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
