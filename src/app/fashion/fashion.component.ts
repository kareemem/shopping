import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { Component } from '@angular/core';
@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
  searchValue:string=''
  fashions:Product[]=[]

  constructor(private _ProductService:ProductService,private _ToastrService:ToastrService){}
    ngOnInit(): void {
  this.getFashions()
  }

  getFashions(){
    this.fashions=this._ProductService.productList.filter(ele=>ele.catID==25)
  }
  buy(id:number){
    this._ProductService.buyProduct(id)
    this._ToastrService.success('The product has been added to the shopping list')
  }
}
