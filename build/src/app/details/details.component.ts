import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css', '../bootstrap/bootstrap.css']
})
export class DetailsComponent implements OnInit {
  product: any;
  disabled = true;
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

    if (this.product.quantity === 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
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

  delete(id) {
    console.log('Deleting Details of ID - ' + id);
    const obs = this._http.destroy(id);
    obs.subscribe( respo => {
      console.log('subscribing...');
      this.goHome();
    },
    err => {
      console.log(err);
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }

  // enable() {
  //   this.enabled = !this.enabled;
  // }

}
