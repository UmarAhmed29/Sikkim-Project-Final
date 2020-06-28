import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryFormComponent } from './salary-form.component';

const routes: Routes = [
    { path: '', component: SalaryFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalaryFormRoutingModule { }
