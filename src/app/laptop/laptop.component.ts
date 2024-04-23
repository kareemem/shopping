import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  laptop:Product[]=[]
  searchValue:string=''
  constructor(private _ProductService:ProductService ,private _ToastrService:ToastrService){}
    ngOnInit(): void {
  this.getLaptops()
  }
  getLaptops(){
    this.laptop=this._ProductService.productList.filter(ele=>ele.catID==30)
  }
  buy(id:number){
    this._ProductService.buyProduct(id)
    this._ToastrService.success('The product has been added to the shopping list')
  }
}
