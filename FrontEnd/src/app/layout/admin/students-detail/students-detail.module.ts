import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsDetailRoutingModule } from './students-detail-routing.module';
import { StudentsDetailComponent } from './students-detail.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    StudentsDetailRoutingModule,
    PageHeaderModule,ReactiveFormsModule,
    FormsModule
  ],
  declarations: [StudentsDetailComponent]
})
export class StudentsDetailModule { }
