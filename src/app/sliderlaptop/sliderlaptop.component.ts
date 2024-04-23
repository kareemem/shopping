import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sliderlaptop',
  templateUrl: './sliderlaptop.component.html',
  styleUrls: ['./sliderlaptop.component.css']
})
export class SliderlaptopComponent {
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
  laptop:Product[]=[]
  constructor(private _ProductService:ProductService){}
    ngOnInit(): void {
  this.getLaptops()
  }
  getLaptops(){
    this.laptop=this._ProductService.productList.filter(ele=>ele.catID==30)
  }
}
