import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneComponent } from './phone/phone.component';
import { AddComponent } from './add/add.component';
import { TvComponent } from './tv/tv.component';
import { FashionComponent } from './fashion/fashion.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SportsComponent } from './sports/sports.component';
import { SearchPipe } from './search.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SilderphoneComponent } from './silderphone/silderphone.component';
import { TextPipe } from './text.pipe';
import { SlidertvComponent } from './slidertv/slidertv.component';
import { SlidersportsComponent } from './slidersports/slidersports.component';
import { SliderfasionComponent } from './sliderfasion/sliderfasion.component';
import { SliderlaptopComponent } from './sliderlaptop/sliderlaptop.component';
import { CartComponent } from './cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    PhoneComponent,
    AddComponent,
    TvComponent,
    FashionComponent,
    LaptopComponent,
    SportsComponent,
    SearchPipe,
    SilderphoneComponent,
    TextPipe,
    SlidertvComponent,
    SlidersportsComponent,
    SliderfasionComponent,
    SliderlaptopComponent,
    CartComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
