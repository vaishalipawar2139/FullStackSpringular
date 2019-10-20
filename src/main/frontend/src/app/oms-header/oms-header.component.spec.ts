import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsHeaderComponent } from './oms-header.component';

describe('OmsHeaderComponent', () => {
  let component: OmsHeaderComponent;
  let fixture: ComponentFixture<OmsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
