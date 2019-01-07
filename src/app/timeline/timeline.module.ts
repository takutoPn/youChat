import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';

import { ChatComponent } from './chat/chat.component';
import { TimelineRoutingModule } from './/timeline-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatCardModule,
  MatFormFieldModule,
} from '@angular/material';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { UserListSearchComponent } from './user-list-search/user-list-search.component';
import { UserDetailComponent } from '../users/user-detail/user-detail.component';
import { UserDetailShowComponent } from './user-detail-show/user-detail-show.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersModule,
    TimelineRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ChatComponent,
    UserListComponent,
    InputComponent,
    UserListSearchComponent,
    // UserDetailComponent,
    UserDetailShowComponent,

  ]
})
export class TimelineModule { }
