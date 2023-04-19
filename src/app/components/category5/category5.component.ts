import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-category5',
  templateUrl: './category5.component.html',
  styleUrls: ['./category5.component.css']
})
export class Category5Component {
  constructor(private _ServeService:ServeService){}

  allgame:any[]=[];
  get(){
    this._ServeService.getCategoryGame_5().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.get()

  }
}
