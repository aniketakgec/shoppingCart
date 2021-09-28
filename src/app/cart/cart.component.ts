import { Component, OnInit } from '@angular/core';
import { Product } from '../product/Product.model';
import { ProductsService } from '../product/services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  cartSize:number=0;
  cartProductList:Product[]=[];
  totalAmount:number=0;

  constructor(private productService:ProductsService) {
    console.log('constructor called');
   }

  ngOnInit(): void {
    this.productService.getCartProductDetails().subscribe(data=>{
      this.cartProductList=data;
      this.cartSize=this.cartProductList.length;
      this.calculateCartValue();
    })

    //console.log('ngOnInit called');
  }

  calculateCartValue()
  {
    this.totalAmount=0;
    for(let i=0;i<this.cartProductList.length;i++)
    {
      this.totalAmount+=this.cartProductList[i].qty*this.cartProductList[i].price;
    }

  }

  increaseQty(cartProduct:Product)
  {
       cartProduct.qty++;
       this.productService
       .updateCartProductDetails(cartProduct)
       .subscribe((data) => {
        // console.log('updated successfully');
       });

       this.calculateCartValue();
  }

  decreaseQty(cartProduct:Product)
  {
    if(cartProduct.qty==1)
    {
      cartProduct.qty--;
      this.productService
        .deleteProductFromCart(cartProduct)
        .subscribe((data) => {
                this.productService.getCartProductDetails().subscribe(data=>{
                  this.cartProductList=data;
                  this.cartSize=this.cartProductList.length;
                  this.calculateCartValue();
                })
          //console.log('deleted successfully');
        });




    }
    else
    {
      cartProduct.qty--;
      this.productService
       .updateCartProductDetails(cartProduct)
       .subscribe((data) => {
         console.log('updated successfully');
       });


    }

    this.calculateCartValue();
 }



}
