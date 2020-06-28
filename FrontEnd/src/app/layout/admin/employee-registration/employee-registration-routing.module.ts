import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeRegistrationComponent } from './employee-registration.component';

const routes: Routes = [
    { path: '', component: EmployeeRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRegistrationRoutingModule { }
