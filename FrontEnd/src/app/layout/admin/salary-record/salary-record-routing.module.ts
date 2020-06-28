import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryRecordComponent } from './salary-record.component';

const routes: Routes = [
    { path: '', component: SalaryRecordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalaryRecordRoutingModule { }
