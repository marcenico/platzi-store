import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getById(id: string) {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  create(product: Product) {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product);
  }

  update(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(
      `${environment.apiUrl}/products/${id}`,
      changes
    );
  }

  delete(id: string) {
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`);
  }
}
