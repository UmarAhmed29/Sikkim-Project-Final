import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolRegistrationComponent } from './school-registration.component';

const routes: Routes = [
    { path: '', component: SchoolRegistrationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolRegistrationRoutingModule { }
