import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsAddComponent } from './oms-add.component';

describe('OmsAddComponent', () => {
  let component: OmsAddComponent;
  let fixture: ComponentFixture<OmsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
