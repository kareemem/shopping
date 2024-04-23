import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:any[]=[]
  admins:any[]=[]
constructor(private _Router:Router,private _AuthService:AuthService,private _ToastrService:ToastrService){}
ngOnInit(): void {
this.getAccounts()
}
  registerForm=new FormGroup({
  name:new FormControl(null,[Validators.required]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  confirmPassword:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[1250][0-9]{8}$/)]),
  role:new FormControl(null,[Validators.required])
}, { validators: this.confirmPassword })
confirmPassword(form: any) {
  let password = form.get('password');
  let confirmPassword = form.get('confirmPassword');
  if (password.value === confirmPassword.value) {
    return null;
  } else {
    confirmPassword.setErrors({ confirmPasswordMatch: 'confirm Password not matched' });
    return { confirmPasswordMatch: 'confirm Password not matched' };
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
createRegister(form:FormGroup){
  const model:any={
    name:form.value.name,
    email:form.value.email,
    password:form.value.password,
    role:form.value.role,
  }
if(form.value.role=='admin'){
  let index =this.admins.findIndex(item=>item.email==this.registerForm.value.email)
  if(index===-1){
    this._AuthService.admins.push(model)
    this._ToastrService.success('The email was created successfully')
    this._Router.navigate(['/login'])
  }else{
    this._ToastrService.error('This email already exists')
  }
}else{
  let index =this.users.findIndex(item=>item.email==this.registerForm.value.email)
  if(index===-1){
    this._AuthService.users.push(model)
    this._ToastrService.success('The email was created successfully')
    this._Router.navigate(['/login'])
  }else{
    this._ToastrService.error('This email already exists')
  }
}
}
}
