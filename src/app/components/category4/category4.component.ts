import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.css']
})
export class Category4Component {
  constructor(private _ServeService:ServeService){}

  allgame:any[]=[];
  get(){
    this._ServeService.getCategoryGame_4().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.get()

  }
}
