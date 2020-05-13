import { Component, OnInit, NgModule  } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { UserService } from '../core/service/user.service';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
@NgModule({
  imports: [
    // MatButtonModule,
    // MatCheckboxModule
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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}
