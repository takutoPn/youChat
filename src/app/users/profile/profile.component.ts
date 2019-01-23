import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { NgForm } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ],
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(f: NgForm): void {
    this.userService.update(f.value);
  }

}
