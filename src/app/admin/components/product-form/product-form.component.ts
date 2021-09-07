import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/utils/validators';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  form: FormGroup;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buidForm();
  }

  buidForm() {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        CustomValidators.isPriceValid,
      ]),
      image: new FormControl(''),
      description: new FormControl('', [Validators.required]),
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.invalid) return;
    this.productsService.create(this.form.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['admin/products']);
      },
      (e) => console.error(e)
    );
  }

  get price() {
    return this.form.get('price');
  }
}
