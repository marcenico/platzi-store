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
}
