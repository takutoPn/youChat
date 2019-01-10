import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { UserListSearchComponent } from '../timeline/user-list-search/user-list-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule ,
    MatIconModule ,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [
    HeaderComponent,
    MatToolbarModule,

  ],
  declarations: [HeaderComponent, UserSearchComponent],
  providers: [
    AuthService,
    UserService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error( 'CoreModule has already been loaded. Import Core modules in the AppModule only.' );
    }
  }

}
