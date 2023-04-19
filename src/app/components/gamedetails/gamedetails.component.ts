import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/serve.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { R3BoundTarget } from '@angular/compiler';
@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent {
constructor(private _ServeService:ServeService,private _ActivatedRoute:ActivatedRoute){}

isloading:boolean=false
ProductDetails:any;
  productId:any;
  gameVid:any;

    ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
  this.productId=params.get('id')
  });
  this._ServeService.getGameDetails(this.productId).subscribe({
  next:(response)=>{this.ProductDetails=response;
    console.log(response);

}


  })

    }


    customOptions: OwlOptions = {
      loop: true,
     autoHeight:true,

      autoplay:true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 300,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },

      },
      nav: true
    }

    showVideo(event:any){
// const vid=event.target.qeuerySelector('video');
// vid.classList.remove('d-none');
// vid.play()
console.log(event);


    }
    addClass(x:HTMLElement){

      x.style.width="200px"


    }


    }


