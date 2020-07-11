import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesDetailComponent } from './employees-detail.component';

const routes: Routes = [
    { path: '', component: EmployeesDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesDetailRoutingModule { }
