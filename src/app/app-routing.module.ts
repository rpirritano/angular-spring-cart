import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


const routes: Routes = [
 
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id/:name', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


