import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcompo2Component } from './subcompo2.component';

describe('Subcompo2Component', () => {
  let component: Subcompo2Component;
  let fixture: ComponentFixture<Subcompo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcompo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
