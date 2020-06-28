import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceFormRoutingModule } from './attendance-form-routing.module';
import { AttendanceFormComponent } from './attendance-form.component';
import { ReactiveFormsModule  } from '@angular/forms';
// import {DatePickerModule} from 'angular-io-datepicker';
// import { OverlayModule } from "angular-io-overlay";
// import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  imports: [
    CommonModule,
    AttendanceFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // OverlayModule,
    // DatePickerModule,
    MyDatePickerModule,
    PageHeaderModule
  ],
  declarations: [AttendanceFormComponent]
})
export class AttendanceFormModule { }
