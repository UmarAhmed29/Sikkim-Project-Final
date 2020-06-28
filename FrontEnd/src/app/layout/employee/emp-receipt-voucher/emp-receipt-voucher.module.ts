import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpReceiptVoucherRoutingModule } from './emp-receipt-voucher-routing.module';
import { EmpReceiptVoucherComponent } from './emp-receipt-voucher.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmpReceiptVoucherRoutingModule,
    ReactiveFormsModule,
    FormsModule,PageHeaderModule,
    MyDatePickerModule
  ],
  declarations: [EmpReceiptVoucherComponent]
})
export class EmpReceiptVoucherModule { }
