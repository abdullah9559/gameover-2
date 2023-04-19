import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-sortbyal',
  templateUrl: './sortbyal.component.html',
  styleUrls: ['./sortbyal.component.css']
})
export class SortbyalComponent {
  constructor(private _ServeService:ServeService){}

  allgame:any[]=[];
  get(){
    this._ServeService.getPopularityGame_3().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.get()

  }
}
