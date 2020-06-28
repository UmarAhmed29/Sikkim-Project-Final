import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesFormRoutingModule } from './fees-form-routing.module';
import { FeesFormComponent } from './fees-form.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  imports: [
    CommonModule,
    FeesFormRoutingModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    PageHeaderModule
  ],
  declarations: [FeesFormComponent]
})
export class FeesFormModule { }
