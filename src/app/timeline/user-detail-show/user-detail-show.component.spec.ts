import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailShowComponent } from './user-detail-show.component';

describe('UserDetailShowComponent', () => {
  let component: UserDetailShowComponent;
  let fixture: ComponentFixture<UserDetailShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
