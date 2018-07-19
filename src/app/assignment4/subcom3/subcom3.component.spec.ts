import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcom3Component } from './subcom3.component';

describe('Subcom3Component', () => {
  let component: Subcom3Component;
  let fixture: ComponentFixture<Subcom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
