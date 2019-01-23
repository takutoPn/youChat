import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

@NgModule({
  imports: [
    MatCardModule, MatButtonModule,
  ]
})

export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
