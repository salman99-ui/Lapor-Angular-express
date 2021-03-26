import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms' ;

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(public FB : FormBuilder) { }

  ngOnInit(): void {
  }

  Form = this.FB.group({
    file : [''] ,
    fileSource : ['']
  })

  onchange(event){
    if(event.target.files.length > 0 ){
      const File = event.target.files[0] ;
      this.Form.get('fileSource').patchValue({
        fileSource : File
      })
    }
  }

  onsubmit(){
    console.log(this.Form)
  }
}
