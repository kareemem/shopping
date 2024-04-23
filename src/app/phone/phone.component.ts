import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  phones:Product[]=[]
  searchValue:string=''
constructor(private _ProductService:ProductService,private _CartService:CartService,private _ToastrService:ToastrService){}
  ngOnInit(): void {
this.getPhones()
}

getPhones(){
  this.phones=this._ProductService.productList.filter(ele=>ele.catID==20)
}
buy(id:number){
  this._ProductService.buyProduct(id)
  this._ToastrService.success('The product has been added to the shopping list')
}
}
