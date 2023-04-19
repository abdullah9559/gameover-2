import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServeService } from 'src/app/serve.service';
Router
ServeService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _ServeService:ServeService ,private _Router:Router){

}
allgame:any[]=[];
   getPopularityGame(){
  this._ServeService.   getPopularityGame().subscribe({
    next:(data)=>{this.allgame=data.slice(0,3);
    console.log(data);
    
    }

  })
}
ngOnInit(): void {
this.getPopularityGame()

}
All(){
  this._Router.navigate(['/all'])
}
}
