import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LaporService } from '../lapor.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id : string ;
  data : any ;
  constructor(private route : ActivatedRoute , private service : LaporService , private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params : ParamMap) => {
        this.id = params.get('id')
      }
    )

    this.data = this.service.getOne(this.id).subscribe(
      data => {
        this.data = data ;
      }
    )


  }

  delete(){
    this.service.deleteData(this.id).then(
      res => { console.log(res) }
    )
    .catch(
      err => { console.log(err) }
    )

    this.router.navigate(['/']);
  }

}
