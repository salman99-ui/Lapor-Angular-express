import { Component, OnInit } from '@angular/core';
import { LaporService } from '../lapor.service';
import { laporin } from 'src/laporin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Data : any ;
  constructor(private service : LaporService) { }

  ngOnInit(): void {
    this.service.getData().subscribe( (data : any) =>{
      this.Data = data.data ;
      console.log(this.Data)
    })
  }

  search(data : string){
    this.service.searchData(data).subscribe(data => {
      this.Data = data ;
      
    })
  }

}
