import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesRecordComponent } from './fees-record.component';

const routes: Routes = [
    { path: '', component: FeesRecordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeesRecordRoutingModule { }
