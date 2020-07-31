import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherAttendanceFormRoutingModule } from './teacher-attendance-form-routing.module';
import { TeacherAttendanceFormComponent } from './teacher-attendance-form.component';
import { ReactiveFormsModule  } from '@angular/forms';
// import {DatePickerModule} from 'angular-io-datepicker';
// import { OverlayModule } from "angular-io-overlay";
// import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from '../../../shared';
@NgModule({
  imports: [
    CommonModule,
    TeacherAttendanceFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // OverlayModule,
    // DatePickerModule,
    MyDatePickerModule,
    PageHeaderModule
  ],
  declarations: [TeacherAttendanceFormComponent]
})
export class TeacherAttendanceFormModule { }
