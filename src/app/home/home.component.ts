import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  searchValue:string=''
  products:Product[]=[]
  page:any=1
  total:any
  constructor(private _ProductService:ProductService,private _ToastrService:ToastrService){}
    ngOnInit(): void {
  this.getAllProducts()
  }

  getAllProducts(){
    this.products=this._ProductService.productList
  }
  changePage(event:any){
    this.page=event
    }
    buy(id:number){
      this._ProductService.buyProduct(id)
      this._ToastrService.success('The product has been added to the shopping list')
    }

}
