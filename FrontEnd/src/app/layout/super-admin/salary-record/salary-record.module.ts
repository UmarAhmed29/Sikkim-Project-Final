import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRecordRoutingModule } from './salary-record-routing.module';
import { SalaryRecordComponent } from './salary-record.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SalaryRecordRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [SalaryRecordComponent]
})
export class SalaryRecordModule { }
