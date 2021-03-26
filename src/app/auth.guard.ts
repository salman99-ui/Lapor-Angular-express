import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { LaporService } from './lapor.service';
import {Router} from '@angular/router' 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service : LaporService , private router : Router){}
  canActivate() : boolean {
    if(this.service.loggedin()){
      let data = {
        token : localStorage.getItem('token') 
      }
      this.service.sendToken(data).subscribe(
        res => {
          if(res.status == 401) return false ;
        }
      )
      return true ;
    }else{
      this.router.navigate(['/login'])
      return false ;
    }
  }
}
