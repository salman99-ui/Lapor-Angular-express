import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import {LaporService} from './lapor.service' ;
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component' ;
import {AuthGuard} from './auth.guard';
import { FileComponent } from './file/file.component' ;
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    DetailComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [LaporService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
