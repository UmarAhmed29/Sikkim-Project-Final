import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFeeRoutingModule } from './student-fee-routing.module';
import { StudentFeeComponent } from './student-fee.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    StudentFeeRoutingModule,
    ReactiveFormsModule,MyDatePickerModule,
    FormsModule,PageHeaderModule
  ],
  declarations: [StudentFeeComponent]
})
export class StudentFeeModule { }
