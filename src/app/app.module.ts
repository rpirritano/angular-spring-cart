import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { AdminModule} from './admin/admin.module';
import { StoreModule } from './store/store.module';
import { MainModule } from './main/main.module';


 
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    StoreModule,
    MainModule,
   
    


     // last for the not found page
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }