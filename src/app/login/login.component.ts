import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.authService.login(f.value.email, f.value.password);
  }
}
