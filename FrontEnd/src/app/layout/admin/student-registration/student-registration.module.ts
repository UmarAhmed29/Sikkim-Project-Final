import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRegistrationRoutingModule } from './student-registration-routing.module';
import { StudentRegistrationComponent } from './student-registration.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        StudentRegistrationRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule
    ],
    declarations: [StudentRegistrationComponent]
})
export class StudentRegistrationModule { }
