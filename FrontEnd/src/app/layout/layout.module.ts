import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { MarksFormComponent } from './admin/marks-form/marks-form.component';
import { MarksRecordComponent } from './admin/marks-record/marks-record.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        // TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        MarksFormComponent,
        MarksRecordComponent
    ]
})
export class LayoutModule { }
