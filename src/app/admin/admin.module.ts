import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserComponent } from './pages/user';
import { AdduserComponent } from './pages/user/adduser/adduser.component';
import { ViewuserComponent } from './pages/user/viewuser/viewuser.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddproductComponent } from './pages/products/addproduct/addproduct.component';
import { ViewproductComponent } from './pages/products/viewproduct/viewproduct.component';
import { DashboardComponent, HeaderComponent } from '.';
import { AdminComponent } from './pages';


 
@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    HeaderComponent,
    UserComponent,
    AdduserComponent,
    ViewuserComponent,
    ProductsComponent,
    AddproductComponent,
    ViewproductComponent,
   
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AdminModule { }