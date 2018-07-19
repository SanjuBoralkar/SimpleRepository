import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcom1Component } from './subcom1.component';

describe('Subcom1Component', () => {
  let component: Subcom1Component;
  let fixture: ComponentFixture<Subcom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
