import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './Product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[];


  constructor(private productService:ProductsService ,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(data=>{
      this.products=data;
    })
  }

  openProductDetails(){

    this.router.navigate(['/productDetails']);
  }
  goToCart(){
    this.router.navigate(['/cart']);
  }


}
