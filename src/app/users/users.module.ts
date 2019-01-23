import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './/users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {
  MatInputModule,
  MatButtonModule, MatCheckboxModule,
  MatToolbarModule, MatCardModule, MatListModule,
  MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatListModule,
    MatFormFieldModule
  ],
  declarations: [ProfileComponent, UserDetailComponent]
})
export class UsersModule { }
