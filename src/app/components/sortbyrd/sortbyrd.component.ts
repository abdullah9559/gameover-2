import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-sortbyrd',
  templateUrl: './sortbyrd.component.html',
  styleUrls: ['./sortbyrd.component.css']
})
export class SortbyrdComponent {
  constructor(private _ServeService:ServeService){}

  allgame:any[]=[];
  get(){
    this._ServeService.getPopularityGame_1().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.get()

  }
}
