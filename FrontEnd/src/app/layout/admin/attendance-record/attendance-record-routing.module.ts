import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceRecordComponent } from './attendance-record.component';

const routes: Routes = [
    { path: '', component: AttendanceRecordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttendanceRecordRoutingModule { }
