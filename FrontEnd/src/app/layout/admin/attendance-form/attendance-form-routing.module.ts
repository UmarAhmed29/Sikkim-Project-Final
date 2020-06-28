import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceFormComponent } from './attendance-form.component';

const routes: Routes = [
    { path: '', component: AttendanceFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttendanceFormRoutingModule { }
