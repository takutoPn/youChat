import { Component, OnInit, NgModule  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../core/service/user.service';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  signup(f: NgForm): void {
    this.userService.create(f.value.email, f.value.password);
  }

}
