import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { CustomValidators } from 'src/app/utils/validators';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buidForm();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getById(this.id).subscribe((product: Product) => {
        this.form.patchValue(product);
      });
    });
  }

  buidForm() {
    this.form = new FormGroup({
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
    this.productsService.update(this.id, this.form.value).subscribe(
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
