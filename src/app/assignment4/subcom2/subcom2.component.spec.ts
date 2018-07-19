import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcom2Component } from './subcom2.component';

describe('Subcom2Component', () => {
  let component: Subcom2Component;
  let fixture: ComponentFixture<Subcom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
