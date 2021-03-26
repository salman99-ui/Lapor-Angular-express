import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {lapor} from '../lapor' ;
import { LaporService } from '../lapor.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})


export class InputComponent implements OnInit {
  success : boolean = false ;
 data = new lapor('','','') ;
 feed : any ;
  constructor(private service : LaporService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.postData(this.data).then(
      res => {
        this.feed = res ;

        if(this.feed.status == 201 ){
          this.success = true ;
          
        }
        console.log(res)}
    ).catch(err => {console.log(err)}) ;
  }
}
