import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/models/Order.model';
import { Product } from '../../models/Product.model';
import { ProductsService } from '../product/services/products.service';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css'],
})
export class BillingDetailsComponent implements OnInit {

  cartProductList: Product[] = [];

  billingDetailsForm: FormGroup = new FormGroup({});
  constructor(private _service: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.billingDetailsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactNumber: new FormControl(null, [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ]),
      gender: new FormControl('male'),
      address: new FormControl(null, Validators.required),
    });

    this._service.getCartProductDetails().subscribe(data => {
      this.cartProductList = data;
    })
  }

  onSubmit() {
    //console.log(this.billingDetailsForm);
    let name = this.billingDetailsForm.value.name;
    let email = this.billingDetailsForm.value.email;
    let contact = this.billingDetailsForm.value.contactNumber;
    let address = this.billingDetailsForm.value.address;


    const date = new Date().toLocaleDateString();
    for (let i = 0; i < this.cartProductList.length; i++) {
      let currentItem = this.cartProductList[i];
      let currentOrder = new Order(currentItem.id, currentItem.imageUrl, currentItem.qty,
        currentItem.title, currentItem.author, date,
        currentItem.price, address, name, contact, email);
      this._service.deleteProductFromCart(currentItem).subscribe((data) => {
        console.log(data + "Deleted successfully");
      })

      this._service.addToPastOrders(currentOrder).subscribe((data) => {
        console.log(data + " added successfully to pastOrders")
      })


    }







    this.billingDetailsForm.reset();
    for (let name in this.billingDetailsForm.controls) {
      this.billingDetailsForm.controls[name].setErrors(null);
    }


    console.log(this.billingDetailsForm);
    setTimeout(() => {
      this.router.navigate(['/myOrders']);
    }, 1200);






  }

}
