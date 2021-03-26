import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators} from '@angular/forms' ;
import { LaporService } from '../lapor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder , private service : LaporService ,
    private router : Router) { }

  ngOnInit(): void {
  }

  regis = this.fb.group({
    name   : ['', [Validators.required , Validators.minLength(3)]] ,
    email      : ['', [Validators.required , Validators.email]] ,
    password   : ['', [Validators.required , Validators.minLength(5)]]
  })

  onSubmit(){
    this.service.register(this.regis.value).subscribe(
      res => {
        if(res.status == 201) {
          Swal.fire({
            title : "success" ,
            icon  : "success" ,
            confirmButtonText : "yes"
          })
          this.router.navigate(['/login'])
        }
      }
    )
  }

}
