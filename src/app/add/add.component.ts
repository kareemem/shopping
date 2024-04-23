import { Icategory } from './../icategory';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
ngOnInit(): void {
  this.getCategoryListProducts()
}
categoryList:Icategory[]=[]
constructor(private _ProductService:ProductService,private _ToastrService:ToastrService){}
addForm=new FormGroup({
  image:new FormControl(null,[Validators.required]),
  title:new FormControl(null,[Validators.required]),
  description:new FormControl(null,[Validators.required]),
  price:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{1,5}$/)]),
  name:new FormControl(null,[Validators.required]),
  catID:new FormControl(null,[Validators.required])
})
getCategoryListProducts(){
  for(let i=0;this._ProductService.categoryList?.length>i;i++){
    this.categoryList.push(this._ProductService.categoryList[i])
  }
}
addProduct(form:FormGroup){
  const model={
    image:form.value.image,
    title:form.value.title,
    description:form.value.description,
    price:form.value.price,
    name:form.value.name,
    id:1,
    catID:form.value.catID
  }
  this._ProductService.addProduct(model)
  this._ToastrService.success('The product has been added successfully')
  this.addForm.reset()
  console.log(this._ProductService.productList);

}

}
