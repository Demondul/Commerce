import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css', '../bootstrap/bootstrap.css']
})
export class UpdateproductComponent implements OnInit {
  product: any;
  constructor(
    private _http: ControlService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product = {
      name: '',
      quantity: 0,
      price: 0.00
    };
    this._route.params.subscribe((params: Params) => {
      this.getDetails(params['id']);
    });
  }

  getDetails(id) {
    console.log('Getting Details of ID - ' + id);
    const obs = this._http.lookUp(id);
    obs.subscribe( respo => {
      console.log('subscribing...');
      this.product = respo['data'];
    },
    err => {
      console.log(err);
    });
  }

  reset(id) {
    this.getDetails(id);
  }

  saveProduct() {
    console.log('Saving Details of ID - ' + this.product._id);
    const obs = this._http.update(this.product._id, this.product);
    obs.subscribe( respo => {
      console.log('subscribing...');
      this.product = respo['data'];
    },
    err => {
      console.log(err);
    });
  }


}
