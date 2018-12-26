 import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../class/user';
import {  UserListSearchComponent } from './user-list-search.component';
import 'rxjs/add/operator/toPromise';

 @Injectable()
 export class UserlistsearchService {
  //userList: User[] = [];
//   constructor(private http: Http) {}

//   search(term: string): Observable<User[]> {
//     return this.http.get(`api/members/?name=${term}`)
//       .map(response => response.json().data as User[]);
//   }
// 本の検索


}
