import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { AddComponent } from './add/add.component';
import { TvComponent } from './tv/tv.component';
import { FashionComponent } from './fashion/fashion.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SportsComponent } from './sports/sports.component';
import { PhoneComponent } from './phone/phone.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',data: {animation: 'login'},component:LoginComponent},
  {path:'register',data: {animation: 'register'},component:RegisterComponent},
  {path:'home',data: {animation: 'home'},canActivate:[authGuard],component:HomeComponent},
  {path:'addProduct',data: {animation: 'addProduct'},canActivate:[authGuard],component:AddComponent},
  {path:'tv',data: {animation: 'tv'},canActivate:[authGuard],component:TvComponent},
  {path:'fashion',data: {animation: 'fashion'},canActivate:[authGuard],component:FashionComponent},
  {path:'laptop',data: {animation: 'laptop'},canActivate:[authGuard],component:LaptopComponent},
  {path:'sports',data: {animation: 'sports'},canActivate:[authGuard],component:SportsComponent},
  {path:'phone',data: {animation: 'phone'},canActivate:[authGuard],component:PhoneComponent},
  {path:'cart',data: {animation: 'cart'},canActivate:[authGuard],component:CartComponent},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
