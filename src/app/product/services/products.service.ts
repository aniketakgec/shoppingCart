import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../Product.model';
import { Observable } from 'rxjs';


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

  addToCart(productBody:any):Observable<Product>
  {
    const url='http://localhost:3000/cartproducts/';
    return this.httpClient.post<Product>(url,productBody);
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
