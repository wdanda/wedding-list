import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsListComponentComponent } from './friends-list-component.component';

describe('FriendsListComponentComponent', () => {
  let component: FriendsListComponentComponent;
  let fixture: ComponentFixture<FriendsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
