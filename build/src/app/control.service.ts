import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get('/products.api');
  }

  newProduct(info) {
    return this._http.post('/products.api/new', info);
  }

  destroy(id) {
    return this._http.delete('/destroy.api/' + id);
  }

  update(id, info) {
    return this._http.put('/products.api/' + id + '/edit', info);
  }

  lookUp(id) {
    return this._http.get('/products.api/' + id);
  }

}
