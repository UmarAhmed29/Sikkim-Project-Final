import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSchoolComponent } from './view-school.component';

const routes: Routes = [
    { path: '', component: ViewSchoolComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewSchoolRoutingModule { }
