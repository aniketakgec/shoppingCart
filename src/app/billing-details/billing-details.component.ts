import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css'],
})
export class BillingDetailsComponent implements OnInit {
  billingDetailsForm: FormGroup = new FormGroup({});
  constructor() {}

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
  }

  onSubmit() {
    console.log(this.billingDetailsForm);
    this.billingDetailsForm.reset();
  }
}
