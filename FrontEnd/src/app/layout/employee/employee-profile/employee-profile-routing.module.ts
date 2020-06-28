import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeProfileComponent } from './employee-profile.component';

const routes: Routes = [
    { path: '', component: EmployeeProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeProfileRoutingModule { }
