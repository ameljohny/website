import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnewComponent } from './aboutnew.component';

describe('AboutnewComponent', () => {
  let component: AboutnewComponent;
  let fixture: ComponentFixture<AboutnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
