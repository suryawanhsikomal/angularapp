import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdetails1Component } from './userdetails1.component';

describe('Userdetails1Component', () => {
  let component: Userdetails1Component;
  let fixture: ComponentFixture<Userdetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userdetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
