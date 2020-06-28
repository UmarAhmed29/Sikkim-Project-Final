import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReceiptVoucherComponent } from './student-receipt-voucher.component';

describe('StudentReceiptVoucherComponent', () => {
  let component: StudentReceiptVoucherComponent;
  let fixture: ComponentFixture<StudentReceiptVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReceiptVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
