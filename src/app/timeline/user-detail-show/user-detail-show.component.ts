import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../class/user';
import { Location } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../core/service/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
// import { UserDetailComponent } from '../../users/user-detail/user-detail.component';

@Component({
  selector: 'app-user-detail-show',
  templateUrl: './user-detail-show.component.html',
  styleUrls: ['./user-detail-show.component.css']
})
export class UserDetailShowComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = params['params']['id'];
        this.db.object(`users/${id}`).valueChanges()
      .subscribe(user => {
        this.user = new User(user);
      });
    });
  }

  goBack(event): void {
    event.preventDefault();
    this.location.back();
  }
}
