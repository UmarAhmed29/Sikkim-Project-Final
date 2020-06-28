import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReceiptVoucherComponent } from './emp-receipt-voucher.component';

describe('EmpReceiptVoucherComponent', () => {
  let component: EmpReceiptVoucherComponent;
  let fixture: ComponentFixture<EmpReceiptVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpReceiptVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
