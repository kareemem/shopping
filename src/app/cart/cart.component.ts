import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
shoppingList:Product[]=[]
  constructor(private _ProductService:ProductService){}
ngOnInit(): void {
this.getAllShoppingList()
}
getAllShoppingList(){
this.shoppingList=this._ProductService.cartList
}
deleteCart(id:any){
  this._ProductService.cartList = this._ProductService.cartList.filter(item=>item.id !== id)
  this.getAllShoppingList()
  this._ProductService.counter.next(this._ProductService.cartList.length)
}
}
