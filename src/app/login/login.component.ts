import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  users:any[]=[

]
  admins:any[]=[

  ]
constructor(private _AuthService:AuthService,private toastr:ToastrService, private _Router:Router){
  if(localStorage.getItem('activeToken') !== null){
    this._Router.navigate(['/home'])
  }
}
ngOnInit(): void {
  this.getAccounts()
}
loginForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  role:new FormControl(null,[Validators.required]),
})

login(form:FormGroup){
  const model:any={
    name:this.loginForm.value.email,
    role:this.loginForm.value.role
  }
if(form.value.role=='admin'){
  let index = this.admins.findIndex(item=>item.email==form.value.email && item.password==form.value.password)
  if(index === -1){
    this.toastr.error('incorrect email or password')
  }else{
    this.toastr.success('you logged in successfully')
    this._Router.navigate(['/home'])
    this._AuthService.active(model)
    localStorage.setItem('activeToken',model)

  }
}else{
  let index = this.users.findIndex(item=>item.email==form.value.email && item.password==form.value.password)
  if(index === -1){
    this.toastr.error('incorrect email or password')
  }else{
    this.toastr.success('you logged in successfully')
    this._Router.navigate(['/home'])
    this._AuthService.active(model)
    localStorage.setItem('activeToken',model)
  }
}

}
getAccounts(){
  for(let i=0;this._AuthService.admins.length>i;i++){
    this.admins.push(this._AuthService.admins[i])
  }
  for(let i=0;this._AuthService.users.length>i;i++){
    this.users.push(this._AuthService.users[i])
  }

}
}
