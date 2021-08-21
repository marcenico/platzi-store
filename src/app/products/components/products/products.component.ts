import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAll().subscribe(
      (res: Product[]) => (this.products = res),
      (e) => console.error(e)
    );
  }

  clickProduct(id: number) {
    console.log(id);
  }
}
