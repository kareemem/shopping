import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit{
  productTV:Product[]=[]
  searchValue:string=''

constructor(private _ProductService:ProductService,private _ToastrService:ToastrService){}
ngOnInit(): void {
this.getTvScreens()
}
getTvScreens(){
  this.productTV=this._ProductService.productList.filter(ele=>ele.catID==21)
}
buy(id:number){
  this._ProductService.buyProduct(id)
  this._ToastrService.success('The product has been added to the shopping list')
}
}
