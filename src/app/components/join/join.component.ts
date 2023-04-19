import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
    if(localStorage.getItem('userToken')!==null){
      _Router.navigate(['/home'])
     }
  }
  isLoading:boolean=false;
  apiError:string='';
registerForm:FormGroup= new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a=z0-9]{5,10}$/)]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a=z0-9]{5,10}$/)]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{validators:this.rePassworMatch})
rePassworMatch(registerForm:any){
let passwordContrrol= registerForm.get('password');
let rePasswordControl=registerForm.get('rePassword');
if(passwordContrrol.value === rePasswordControl.value){
  return null
}else{
  rePasswordControl.setErrors({passwordmatch:'password and repassword not match '})
  return {passwordmatch:'password and repassword not match '}
}
}
handleRegister(registerForm:FormGroup){
  this.isLoading=true;
  console.log(registerForm);

if(registerForm.valid)
{
this._AuthService.registrer(registerForm.value).subscribe({
  next:(response)=>{
    if(response.message === 'success'){
      this.isLoading=false;
this._Router.navigate(['/login'])
    }
  },
  error:(err)=>{
    this.isLoading=false;
    this.apiError= err.error.errors.msg;

  }
})

}


}
}
