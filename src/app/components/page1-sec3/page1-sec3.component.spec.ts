import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Sec3Component } from './page1-sec3.component';

describe('Page1Sec3Component', () => {
  let component: Page1Sec3Component;
  let fixture: ComponentFixture<Page1Sec3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Sec3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Sec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
