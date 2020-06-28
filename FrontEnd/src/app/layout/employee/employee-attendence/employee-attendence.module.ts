import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAttendenceRoutingModule } from './employee-attendence-routing.module';
import { EmployeeAttendenceComponent } from './employee-attendence.component';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  imports: [
    CommonModule,
    EmployeeAttendenceRoutingModule,
    FormsModule, ReactiveFormsModule,
    PageHeaderModule,
    MyDatePickerModule
  ],
  declarations: [EmployeeAttendenceComponent]
})
export class EmployeeAttendenceModule { }
