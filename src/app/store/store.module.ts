import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared';
 
import { AboutUsComponent } from './pages';
import { ContactUsComponent } from './pages';
import { HomeComponent } from './pages';
import { SearchComponent } from './pages';
import { ProductListComponent } from './pages';
import { ProductCategoryMenuComponent } from './pages';
import { CartStatusComponent } from './pages';
import { StoreComponent } from './pages/store.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



 
@NgModule({
  declarations: [
    StoreComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    CartStatusComponent,
],
  imports: [
    StoreRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})

export class StoreModule { 
 
}