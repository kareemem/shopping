import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id:any
  productDetails:Product[]=[]
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService,private _ToastrService:ToastrService){}
ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe((params)=>{
this.id=params.get('id')
})
this.getProductDetails()
}

getProductDetails(){
  this._ProductService.getProductDetails(this.id)
  this.productDetails=this._ProductService.productDetails
  console.log(this.productDetails);
}
buy(id:any){
  this._ProductService.buyProduct(id)
  this._ToastrService.success('The product has been added to the shopping list')
}
}
