import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCard } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

@NgModule({
  imports: [
    MatCard,
        BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule
  ]
})

export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
