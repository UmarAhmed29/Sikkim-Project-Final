import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRecordRoutingModule } from './fees-record-routing.module';
import { FeesRecordComponent } from './fees-record.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FeesRecordRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [FeesRecordComponent]
})
export class FeesRecordModule { }
