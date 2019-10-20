import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsFooterComponent } from './oms-footer.component';

describe('OmsFooterComponent', () => {
  let component: OmsFooterComponent;
  let fixture: ComponentFixture<OmsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
