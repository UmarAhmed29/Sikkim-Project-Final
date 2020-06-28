import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryFormRoutingModule } from './salary-form-routing.module';
import { SalaryFormComponent } from './salary-form.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  imports: [
    CommonModule,
    SalaryFormRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule
  ],
  declarations: [SalaryFormComponent]
})
export class SalaryFormModule { }
