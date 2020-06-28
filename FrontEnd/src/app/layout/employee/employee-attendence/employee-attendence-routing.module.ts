import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeAttendenceComponent } from './employee-attendence.component';

const routes: Routes = [
    { path: '', component: EmployeeAttendenceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeAttendenceRoutingModule { }
