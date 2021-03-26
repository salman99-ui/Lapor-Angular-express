import { Component, OnInit } from '@angular/core'
import {FormBuilder , Validators} from '@angular/forms' 
import { LaporService } from '../lapor.service'
import {Router} from '@angular/router'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Data : boolean = false ;
  constructor(private fb : FormBuilder , private service : LaporService ,private route : Router) { }

  ngOnInit(): void {
  }

  regis = this.fb.group({
    email    : ['' , [Validators.required , Validators.email]] ,
    password : ['',  Validators.required ] 
  })

  onSubmit(){
    this.service.login(this.regis.value).subscribe(
      data => {
        if(data.status == 400){
          console.log(data)
         Swal.fire({
           title : "Info" ,
           text  : "Please register you dont have an account" ,
           icon  : "error" ,
           showCancelButton  : true ,
           confirmButtonText : "Agree" ,
           cancelButtonText  : "Cancel"
         })
        }else{
          if(data.status == 401){
            this.Data = true ;
          }else{
            localStorage.setItem('token' , data.token)
            this.route.navigate(['/'])
          }
        }
      }
    )
  }

}
