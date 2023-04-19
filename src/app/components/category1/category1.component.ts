import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component {
  constructor(private _ServeService:ServeService){}

  allgame:any[]=[];
  get(){
    this._ServeService.getCategoryGame_1().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.get()

  }
}
