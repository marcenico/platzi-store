import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProdcutDashboardComponent } from './components/prodcut-dashboard/prodcut-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: '', component: ProdcutDashboardComponent },
      { path: 'table', component: ProductTableComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/create', component: ProductFormComponent },
      { path: 'products/edit/:id', component: ProductEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
