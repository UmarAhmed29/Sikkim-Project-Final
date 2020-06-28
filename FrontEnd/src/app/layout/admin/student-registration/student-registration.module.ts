import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRegistrationRoutingModule } from './student-registration-routing.module';
import { StudentRegistrationComponent } from './student-registration.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        StudentRegistrationRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [StudentRegistrationComponent]
})
export class StudentRegistrationModule { }
