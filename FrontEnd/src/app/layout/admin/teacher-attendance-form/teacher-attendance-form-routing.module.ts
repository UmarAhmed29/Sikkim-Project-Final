import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherAttendanceFormComponent } from './teacher-attendance-form.component';

const routes: Routes = [
    { path: '', component: TeacherAttendanceFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherAttendanceFormRoutingModule { }
