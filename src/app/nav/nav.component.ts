import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  counter:any
  showToggleLink:boolean=false
constructor(private _AuthService:AuthService,private _Router:Router, private _ProductService:ProductService){
this._ProductService.counter.subscribe({
  next:()=>{
    this.counter=this._ProductService.counter.getValue()
  }
})

}
ngOnInit(): void {
    this._AuthService.accountActive.subscribe({
      next:()=>{
        if(this._AuthService.accountActive.getValue()!==null){
          this.showToggleLink=true
        }else{
          this.showToggleLink=false
        }
      }
    })
}
logout(){
  this._AuthService.logOut()
}
}
