import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CustomValidators } from 'src/app/utils/validators';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private fireStorage: AngularFireStorage
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

  uploadFile(event: any) {
    const file = event.target.files[0];
    const fileRef = this.fireStorage.ref(file.name);
    const task = this.fireStorage.upload(file.name, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }

  get price() {
    return this.form.get('price');
  }
}
