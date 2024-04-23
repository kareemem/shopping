import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sliderfasion',
  templateUrl: './sliderfasion.component.html',
  styleUrls: ['./sliderfasion.component.css']
})
export class SliderfasionComponent {
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
  fashions:Product[]=[]
  constructor(private _ProductService:ProductService){}
    ngOnInit(): void {
  this.getFashions()
  }

  getFashions(){
    this.fashions=this._ProductService.productList.filter(ele=>ele.catID==25)
  }
}
