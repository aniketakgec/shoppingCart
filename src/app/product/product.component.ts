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
  productId:number=0;
  products:Product[]=[];


  constructor(private productService:ProductsService ,private router:Router) {

   }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(data=>{
      this.products=data;
    })
  }

  openProductDetails(productId:number){

    this.router.navigate(['/product/'+productId]);
  }
  goToCart(product:Product){

    this.productService.addToCart(product).subscribe(data=>{
      this.router.navigate(['/cart']);
    })


  }


}
