import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
AuthService
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin:boolean = false;
  cartNumbers:number=0;
  logOut(){
    this._AuthService.logOut();
  }
constructor(private _AuthService:AuthService){

  _AuthService.userData.subscribe({
  next:()=>{
    if(_AuthService.userData.getValue()!==null){
      this.isLogin=true;
    }
    else{
      this.isLogin=false;
    }
  }
}

)
}
}
