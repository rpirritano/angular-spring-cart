import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardEmpComponent } from './pages/board-emp/board-emp.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';



 
const routes: Routes = [
  {   path: 'main', component: MainComponent,
      children :[
          { path: 'home', component: HomePageComponent},
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'contact-us', component: ContactFormComponent},
          { path: 'user', component: BoardUserComponent },
          { path: 'emp', component: BoardEmpComponent },
          { path: 'admin', component: BoardAdminComponent },
          { path: '', redirectTo: 'home', pathMatch: 'full' }
      ]
  },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }