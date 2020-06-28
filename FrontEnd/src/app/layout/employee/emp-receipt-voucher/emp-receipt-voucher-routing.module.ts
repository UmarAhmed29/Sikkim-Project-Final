import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpReceiptVoucherComponent } from './emp-receipt-voucher.component';

const routes: Routes = [
    { path: '', component: EmpReceiptVoucherComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpReceiptVoucherRoutingModule { }
