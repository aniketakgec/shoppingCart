import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../product/services/products.service';
import { Order } from 'src/models/Order.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

   pastOrders:Order[]=[];

  constructor(private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getPastOrders().subscribe(data=>{
      this.pastOrders=data;
      this.pastOrders.reverse();
    })

  }
  openProductDetails(productId:number){

    this.router.navigate(['product/'+productId]);
  }

}
