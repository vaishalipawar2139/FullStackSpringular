import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsLogoutComponent } from './oms-logout.component';

describe('OmsLogoutComponent', () => {
  let component: OmsLogoutComponent;
  let fixture: ComponentFixture<OmsLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
