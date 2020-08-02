import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AboutUsComponent } from './pages';
import { MainLayoutComponent } from './pages';
import { CartDetailsComponent } from './pages';
import { CheckoutComponent } from './pages';
import { OrderConfirmationComponent } from './pages';
import { ProductDetailsComponent } from './pages';
import { ContactUsComponent } from './pages';
import { HomeComponent } from './pages';
import { SearchComponent } from './pages';
import { ProductListComponent } from './pages';
import { ProductCategoryMenuComponent } from './pages';
import { CartStatusComponent } from './pages';
import { StoreComponent } from './pages/store.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';




 
@NgModule({
  declarations: [
    StoreComponent,
    //MainLayoutComponent,
    AboutUsComponent,
    CartDetailsComponent,
    ContactUsComponent,
    //HomeComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCategoryMenuComponent,
    OrderConfirmationComponent,
    SearchComponent,
    CartStatusComponent,
],
  imports: [
    BrowserModule,
    StoreRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
   
  ]
})

export class StoreModule { 
 
}