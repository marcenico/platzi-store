import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProdcutDashboardComponent } from './components/prodcut-dashboard/prodcut-dashboard.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProdcutDashboardComponent,
    ProductTableComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ],
})
export class AdminModule {}
