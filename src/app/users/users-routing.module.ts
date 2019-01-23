import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UsersRoutingModule { }
