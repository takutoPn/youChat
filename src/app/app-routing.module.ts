import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './error/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserListComponent } from './timeline/user-list/user-list.component';


const routes: Routes = [
  { path: 'timeline', loadChildren: () => import('../app/timeline/timeline.module').then(m => m.TimelineModule) },
  { path: 'users', loadChildren: () => import('../app/users/users.module').then(m => m.UsersModule) },
  { path: 'userlist', component: UserListComponent },
  { path: 'signup', component: SignUpComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ AuthGuard ] },
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
