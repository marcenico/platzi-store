import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((products: Product[]) => {
      this.total = products.length;
    });
  }
}
