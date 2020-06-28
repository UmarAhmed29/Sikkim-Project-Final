import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentProfileRoutingModule } from './student-profile-routing.module';
import { StudentProfileComponent } from './student-profile.component';
import { PageHeaderModule } from './../../../shared';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    ReactiveFormsModule,FormsModule,
    PageHeaderModule
  ],
  declarations: [StudentProfileComponent]
})
export class StudentProfileModule { }
