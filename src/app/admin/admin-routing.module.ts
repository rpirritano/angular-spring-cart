import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './pages/user';
import { ProductsComponent } from './pages/products/products.component';
import { AdminComponent } from './pages';
import { DashboardComponent } from '.';

 

 
const routes: Routes = [
  {   path: 'admin', component: AdminComponent,
      children :[
          { path: 'dashboard', component: DashboardComponent},
          { path: 'users', component: UserComponent},
          { path: 'products', component: ProductsComponent},
      ]
  },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }