import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product.model';

@Pipe({
  name: 'groupby',
})
export class GroupPipe implements PipeTransform {
  transform(products: Product[], field: string): any {
    const auxProducts: Product[] = [];

    for (const product of products) {
      const productInAux: Product = auxProducts.find(
        (obj) => obj[field] === product[field]
      );
      if (productInAux) productInAux.count++;
      else auxProducts.push({ ...product, count: 1 });
    }

    return auxProducts;
  }
}
