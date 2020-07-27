import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeRegistrationRoutingModule } from './employee-registration-routing.module';
import { EmployeeRegistrationComponent } from './employee-registration.component';
import { PageHeaderModule } from './../../../shared';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        EmployeeRegistrationRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule,
    ],
    declarations: [EmployeeRegistrationComponent],
})
export class EmployeeRegistrationModule {}
