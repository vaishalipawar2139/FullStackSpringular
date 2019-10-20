import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsLoginComponent } from './oms-login.component';

describe('OmsLoginComponent', () => {
  let component: OmsLoginComponent;
  let fixture: ComponentFixture<OmsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
