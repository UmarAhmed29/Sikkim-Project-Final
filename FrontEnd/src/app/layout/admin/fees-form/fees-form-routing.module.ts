import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesFormComponent } from './fees-form.component';

const routes: Routes = [
    { path: '', component: FeesFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeesFormRoutingModule { }
