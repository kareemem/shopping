import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { Product } from './../product';
import { Component } from '@angular/core';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  sports:Product[]=[]
  searchValue:string=''
  constructor(private _ProductService:ProductService,private _ToastrService:ToastrService){}
    ngOnInit(): void {
  this.getSports()
  }

  getSports(){
    this.sports=this._ProductService.productList.filter(ele=>ele.catID==40)
  }
  buy(id:number){
    this._ProductService.buyProduct(id)
    this._ToastrService.success('The product has been added to the shopping list')
  }
}
