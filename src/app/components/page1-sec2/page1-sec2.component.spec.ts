import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Sec2Component } from './page1-sec2.component';

describe('Page1Sec2Component', () => {
  let component: Page1Sec2Component;
  let fixture: ComponentFixture<Page1Sec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Sec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Sec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
