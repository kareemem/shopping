import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _Router:Router){
    if(localStorage.getItem('activeToken') !== null){
      this.active(localStorage.getItem('activeToken'))
    }

  }
  accountActive=new BehaviorSubject(null)
  admins:any[]=[
    {
      name:'admin',
      email:'admin@test.com',
      password:'123456',
      role:'admin',
    }
  ]
  users:any[]=[
    {
      name:'user',
      email:'user@one.com',
      password:'123456',
      role:'user',
    },
    {
      name:'user',
      email:'user@two.com',
      password:'123456',
      role:'user',
    },
    {
      name:'user',
      email:'user@three.com',
      password:'123456',
      role:'user',
    }
  ]
active(model:any){
this.accountActive.next(model)
}

logOut(){
  this.accountActive.next(null)
  this._Router.navigate(['/login'])
  localStorage.removeItem('activeToken')

}
}
