import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.authService.login(f.value.email, f.value.password);
  }
}
