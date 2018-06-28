import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css', '../bootstrap/bootstrap.css']
})
export class NewproductComponent implements OnInit {
  product: any;
  errMessage: any;
  constructor(
    private _http: ControlService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {
      name: '',
      quantity: 0,
      price: 0.00
    };
    // this.errMessage = { message: '' };
  }

  addProduct() {
    console.log('Adding a pet');
    console.log(this.product);
    const obs = this._http.newProduct(this.product);
    obs.subscribe(respo => {
      console.log(respo);
      if (respo['message']) {
        this.errMessage = respo['message'];
        console.log(this.errMessage);
      } else {
        this._router.navigate(['/']);
      }
    },
    err => {
      console.log(err);
    });
  }

  reset() {
    this.product.name = '';
    this.product.quantity = 0;
    this.product.price = 0.00;
  }
}
