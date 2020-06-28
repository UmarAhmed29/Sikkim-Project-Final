import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeQueryRoutingModule } from './employee-query-routing.module';
import { EmployeeQueryComponent } from './employee-query.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeQueryRoutingModule
  ],
  declarations: [EmployeeQueryComponent]
})
export class EmployeeQueryModule { }
