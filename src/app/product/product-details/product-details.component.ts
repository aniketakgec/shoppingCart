import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:number=0;
  product:Product=new Product();

  constructor(private route:ActivatedRoute,private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['id'];
    this.productService.viewProductDetails(this.productId).subscribe(data=>{
      this.product=data;
    })
  }

   addToCart(){
      this.productService.addToCart(this.product).subscribe(data=>{
      this.router.navigate(['/cart']);
    })
  }


}
