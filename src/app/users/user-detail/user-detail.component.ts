import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../class/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.db.object(`users/${id}`).valueChanges()
      .subscribe(user => {
        this.user = new User(user);
      });
  }

  goBack(event): void {
    event.preventDefault();
    this.location.back();
  }
}
