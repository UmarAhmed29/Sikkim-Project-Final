import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentReceiptVoucherRoutingModule } from './student-receipt-voucher-routing.module';
import { StudentReceiptVoucherComponent } from './student-receipt-voucher.component';

@NgModule({
  imports: [
    CommonModule,
    StudentReceiptVoucherRoutingModule
  ],
  declarations: [StudentReceiptVoucherComponent]
})
export class StudentReceiptVoucherModule { }
