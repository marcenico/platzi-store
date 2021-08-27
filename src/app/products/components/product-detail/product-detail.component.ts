import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    this.route.params.subscribe(
      (params: Params) => {
        this.productsService.getById(params.id).subscribe(
          (res: Product) => (this.product = res),
          (e) => console.error(e)
        );
      },
      (e) => console.error(e)
    );
  }

  createProduct() {
    const newProduct: Product = {
      id: '232',
      title: 'Nuevo Producto',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto',
    };
    this.productsService.create(newProduct).subscribe(
      (product: Product) => console.log(product),
      (e) => console.error(e)
    );
  }

  updateProduct() {
    const editProduct: Product = {
      id: '2',
      title: 'Edicion Product',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto',
    };
    this.productsService.update('2', editProduct).subscribe(
      (product: Product) => console.log(product),
      (e) => console.error(e)
    );
  }

  deleteProduct() {
    this.productsService.delete('2').subscribe(
      (res: any) => console.log(res),
      (e) => console.error(e)
    );
  }
}
