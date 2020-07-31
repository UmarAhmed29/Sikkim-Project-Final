import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherAttendanceRecordComponent } from './teacher-attendance-record.component';

const routes: Routes = [
    { path: '', component: TeacherAttendanceRecordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherAttendanceRecordRoutingModule { }
