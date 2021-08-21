import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('https://platzi-store.herokuapp.com/products');
  }

  getById(id: string) {
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
