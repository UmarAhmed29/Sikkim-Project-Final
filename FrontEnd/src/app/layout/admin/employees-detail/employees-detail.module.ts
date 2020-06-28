import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesDetailRoutingModule } from './employees-detail-routing.module';
import { EmployeesDetailComponent } from './employees-detail.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    EmployeesDetailRoutingModule,
    PageHeaderModule,FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeesDetailComponent]
})
export class EmployeesDetailModule { }
