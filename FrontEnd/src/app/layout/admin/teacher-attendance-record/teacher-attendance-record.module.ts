import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAttendanceRecordRoutingModule } from './teacher-attendance-record-routing.module';
import { TeacherAttendanceRecordComponent } from './teacher-attendance-record.component';
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
    TeacherAttendanceRecordRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule
  ],
  declarations: [TeacherAttendanceRecordComponent]
})
export class TeacherAttendanceRecordModule { }
