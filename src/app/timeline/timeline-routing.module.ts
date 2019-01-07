import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ChatComponent} from './chat/chat.component';
import { UserDetailShowComponent } from './user-detail-show/user-detail-show.component';

const routes: Routes = [
  {
    path: '', component: ChatComponent,
    children: [
      { path: 'user-detail-show/:id', component: UserDetailShowComponent }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TimelineRoutingModule { }
