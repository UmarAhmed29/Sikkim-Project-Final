import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsDetailComponent } from './students-detail.component';

const routes: Routes = [
    { path: '', component: StudentsDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsDetailRoutingModule { }
