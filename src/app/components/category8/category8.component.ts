import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-category8',
  templateUrl: './category8.component.html',
  styleUrls: ['./category8.component.css']
})
export class Category8Component {
  constructor(private _ServeService:ServeService){}

  allgame:any[]=[];
  get(){
    this._ServeService.getCategoryGame_8().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.get()

  }
}
