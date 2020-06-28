import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { EmployeeProfileComponent } from './employee-profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
@NgModule({
  imports: [
    CommonModule,
    EmployeeProfileRoutingModule,
    FormsModule,ReactiveFormsModule,
    PageHeaderModule
  ],
  declarations: [EmployeeProfileComponent]
})
export class EmployeeProfileModule { }
