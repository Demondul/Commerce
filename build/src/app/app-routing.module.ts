import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'products/new', component: NewproductComponent},
  { path: 'products/:id', component: DetailsComponent},
  { path: 'products/:id/edit', component: UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
