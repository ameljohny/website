import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVertContactComponent } from './nav-vert-contact.component';

describe('NavVertContactComponent', () => {
  let component: NavVertContactComponent;
  let fixture: ComponentFixture<NavVertContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVertContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVertContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
