import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SchoolRegistrationRoutingModule } from './school-registration-routing.module';
import { SchoolRegistrationComponent } from './school-registration.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        SchoolRegistrationRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SchoolRegistrationComponent]
})
export class SchoolRegistrationModule { }
