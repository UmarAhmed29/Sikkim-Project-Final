import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EmployeeRegistrationRoutingModule } from './employee-registration-routing.module';
import { EmployeeRegistrationComponent } from './employee-registration.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        EmployeeRegistrationRoutingModule,
        PageHeaderModule,
        FormsModule,ReactiveFormsModule
    ],
    declarations: [EmployeeRegistrationComponent]
})
export class EmployeeRegistrationModule { }
