import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ChatComponent } from './chat/chat.component';
import { TimelineRoutingModule } from './/timeline-routing.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimelineRoutingModule
  ],
  declarations: [
    ChatComponent,
    UserListComponent
  ]
})
export class TimelineModule { }
