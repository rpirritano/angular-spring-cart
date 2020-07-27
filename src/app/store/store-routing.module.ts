import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent, ProductListComponent } from './pages';
import { ContactUsComponent} from './pages';
import { HomeComponent } from './pages';
import { StoreComponent } from './pages/store.component';
 
const routes: Routes = [
  {   path: 'store', component: StoreComponent,
      children: [
        { path: '', component: HomeComponent},
        { path: 'products', component: ProductListComponent},
        { path: 'contactus', component: ContactUsComponent},
        { path: 'aboutus', component: AboutUsComponent},
]
  },
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
 