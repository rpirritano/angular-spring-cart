import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 
@NgModule({
  imports: [
    NgbModule
  ],
  providers: [
    //GitHubService
  ],
  declarations: []
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
 