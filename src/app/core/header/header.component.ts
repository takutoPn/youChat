import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.login = true;
      } else {
        this.login = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
