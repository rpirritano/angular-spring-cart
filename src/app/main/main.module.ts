import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { MainComponent } from './pages/main.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardEmpComponent } from './pages/board-emp/board-emp.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';

import { AuthInterceptor } from '../core/_helpers/auth.interceptor';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactMailService } from '../core/_services/contact-mail.service';
import { ItemSpecialComponent } from './pages/item-special/item-special.component';





@NgModule({
  declarations: [
    MainComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardEmpComponent,
    BoardUserComponent,
    ContactFormComponent,
    ItemSpecialComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthInterceptor,
    ContactMailService
  ]
})
export class MainModule { }
