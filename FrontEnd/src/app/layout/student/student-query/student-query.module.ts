import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentQueryRoutingModule } from './student-query-routing.module';
import { StudentQueryComponent } from './student-query.component';

@NgModule({
  imports: [
    CommonModule,
    StudentQueryRoutingModule
  ],
  declarations: [StudentQueryComponent]
})
export class StudentQueryModule { }
