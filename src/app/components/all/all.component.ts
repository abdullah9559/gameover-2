import { Component } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  constructor(private _ServeService:ServeService){

  }
  allgame:any[]=[];
  getAllgame(){
    this._ServeService.getAllgame().subscribe({
      next:(data)=>{this.allgame=data;
      console.log(data);
      }

    })
  }
  ngOnInit(): void {
  this.getAllgame()

  }
  }

