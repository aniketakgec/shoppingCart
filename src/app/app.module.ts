import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './product/services/products.service';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes=[
  { path:'',component:ProductComponent  },
  { path:'product/:id',component:ProductDetailsComponent },
  { path:'myOrders',component:MyOrdersComponent},
  { path:'cart',component:CartComponent},
  {path:'billing',component:BillingDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailsComponent,
    MyOrdersComponent,
    CartComponent,
    BillingDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
