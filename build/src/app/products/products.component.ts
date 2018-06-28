import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../bootstrap/bootstrap.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private _http: ControlService) { }

  ngOnInit() {
    console.log('initializing...');
    this.getProducts();
  }

  getProducts() {
    console.log('getting products...');
    const obs = this._http.getAllProducts();
    obs.subscribe(respo => {
      this.products = respo['data'];
      console.log(respo['data']);
    },
      err => {
        console.log(err);
      });
  }
}
