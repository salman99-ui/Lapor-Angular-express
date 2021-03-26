import { Component } from '@angular/core';
import { LaporService } from './lapor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(public service : LaporService , private router : Router){}

  onclick(){
    localStorage.removeItem('token') ;
    this.router.navigate(['/login'])
  }

  login(){
    this.router.navigate(['/login']) ;
  }

  register(){
    this.router.navigate(['/register']);
  }
}
