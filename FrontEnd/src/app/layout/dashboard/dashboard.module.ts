import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    NotificationComponent
} from './components';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
        NotificationComponent,
        // BarChartComponent
    ],
    exports: [
        // BarChartComponent
    ]
})
export class DashboardModule { }
