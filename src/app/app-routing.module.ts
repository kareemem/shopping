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
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'addProduct',canActivate:[authGuard],component:AddComponent},
  {path:'tv',canActivate:[authGuard],component:TvComponent},
  {path:'fashion',canActivate:[authGuard],component:FashionComponent},
  {path:'laptop',canActivate:[authGuard],component:LaptopComponent},
  {path:'sports',canActivate:[authGuard],component:SportsComponent},
  {path:'phone',canActivate:[authGuard],component:PhoneComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
