import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../product.service';

ProductService
@Component({
  selector: 'app-silderphone',
  templateUrl: './silderphone.component.html',
  styleUrls: ['./silderphone.component.css']
})
export class SilderphoneComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  phones:Product[]=[]
constructor(private _ProductService:ProductService){}
  ngOnInit(): void {
this.getPhones()
}

getPhones(){
  this.phones=this._ProductService.productList.filter(ele=>ele.catID==20)
}
}
