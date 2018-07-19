import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcompo1Component } from './subcompo1.component';

describe('Subcompo1Component', () => {
  let component: Subcompo1Component;
  let fixture: ComponentFixture<Subcompo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcompo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
