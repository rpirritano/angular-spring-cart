import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent, OrderConfirmationComponent } from './pages';
import { AboutUsComponent } from './pages';
import { ContactUsComponent} from './pages';
import { HomeComponent } from './pages';
import { StoreComponent } from './pages/store.component';
import { CheckoutComponent } from './pages/checkout';
import { CartDetailsComponent } from './pages/cart-details';
import { ProductDetailsComponent } from './pages/product-details';
 
const routes: Routes = [

  { path: 'store', component: StoreComponent,
    children: [
      {path: 'category/:id', component: ProductListComponent},
      {path: 'category', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'cart-details', component: CartDetailsComponent},
      {path: 'order-confirmation', component: OrderConfirmationComponent},
      {path: 'search/:keyword', component: ProductListComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: '', redirectTo: '/store/products', pathMatch: 'full'}, //not working?
      {path: '**', redirectTo: '/store/products', pathMatch: 'full'}, //not working?
    ],
    
  },
 
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
 