import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../class/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersRef: AngularFireList<any>;
  users: User[];

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list('/users');
  }

  ngOnInit() {
    this.usersRef.snapshotChanges().subscribe(snapshots => {
      this.users = snapshots.map(snapshot => {
        const values = snapshot.payload.val();
        return new User(values);
      });
    });
  }

}
