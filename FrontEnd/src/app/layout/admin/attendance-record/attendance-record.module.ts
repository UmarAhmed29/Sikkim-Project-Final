import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRecordRoutingModule } from './attendance-record-routing.module';
import { AttendanceRecordComponent } from './attendance-record.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
// import {DatePickerModule} from 'angular-io-datepicker';
// import { OverlayModule } from "angular-io-overlay";
// import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
@NgModule({
  imports: [
    CommonModule,
    AttendanceRecordRoutingModule,
    PageHeaderModule,
    FormsModule,ReactiveFormsModule,
    MyDatePickerModule
  ],
  declarations: [AttendanceRecordComponent]
})
export class AttendanceRecordModule { }
