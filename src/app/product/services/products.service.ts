import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../../../models/Product.model';
import { Observable } from 'rxjs';
import { Order } from 'src/models/Order.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getProductDetails():Observable<Product[]>{
    const productUrl=' http://localhost:3000/products/';
    return this.httpClient.get<Product[]>(productUrl);
  }

  getCartProductDetails():Observable<Product[]>{
    const productUrl=' http://localhost:3000/cartproducts/';
    return this.httpClient.get<Product[]>(productUrl);
  }

  getPastOrders():Observable<Order[]>{
    const productUrl=' http://localhost:3000/pastOrders/';
    return this.httpClient.get<Order[]>(productUrl);
  }

  addToCart(productBody:any):Observable<Product>
  {
    const url='http://localhost:3000/cartproducts/';
    return this.httpClient.post<Product>(url,productBody);
  }

  addToPastOrders(orders:Order)
  {
    const url='http://localhost:3000/pastOrders/';
    return this.httpClient.post<Order>(url,orders);
  }

  viewProductDetails(productId:number):Observable<Product>
  {
    const productUrl=' http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateCartProductDetails(cartProduct:Product):Observable<Product>
  {
    const productUrl=' http://localhost:3000/cartproducts/'+cartProduct.id;
    return this.httpClient.put<Product>(productUrl,cartProduct);
  }

  deleteProductFromCart(cartProduct:Product)
  {
    const productUrl=' http://localhost:3000/cartproducts/'+cartProduct.id;
    return this.httpClient.delete<Product>(productUrl);
  }





}
