import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentReceiptVoucherComponent } from './student-receipt-voucher.component';

const routes: Routes = [
    { path: '', component: StudentReceiptVoucherComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentReceiptVoucherRoutingModule { }
