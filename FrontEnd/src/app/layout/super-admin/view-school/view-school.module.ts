import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSchoolComponent } from './view-school.component';
import { ViewSchoolRoutingModule } from './view-school-routing.module';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        ViewSchoolRoutingModule,
        PageHeaderModule
    ],
    declarations: [ViewSchoolComponent]
})
export class ViewSchoolModule { }
