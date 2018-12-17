import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSearchComponent } from './user-list-search.component';

describe('UserListSearchComponent', () => {
  let component: UserListSearchComponent;
  let fixture: ComponentFixture<UserListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
