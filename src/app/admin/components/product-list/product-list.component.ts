import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe((products: Product[]) => (this.products = products));
  }

  createProduct() {
    const newProduct: Product = {
      id: '232',
      title: 'Nuevo Producto',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto',
    };
    this.productService.create(newProduct).subscribe(
      (product: Product) => console.log(product),
      (e) => console.error(e)
    );
  }

  updateProduct(editProduct: Product) {
    this.productService.update('2', editProduct).subscribe(
      (product: Product) => console.log(product),
      (e) => console.error(e)
    );
  }

  deleteProduct(id: string) {
    this.productService.delete(id).subscribe(
      (res: any) => console.log(res),
      (e) => console.error(e)
    );
  }
}
