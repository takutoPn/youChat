import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserlistsearchService } from './user-list-Search.service';
import { User } from '../../class/user';

@Component({
  selector: 'app-user-list-search',
  templateUrl: './user-list-search.component.html',
  styleUrls: ['./user-list-search.component.css'],
  providers: [ UserlistsearchService ]
})

export class UserListSearchComponent implements OnInit {
  users: Observable<User[]>;
  UserlistsearchService: any;
 // isHit = false;

  constructor(
    private userlistsearchService: UserlistsearchService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
