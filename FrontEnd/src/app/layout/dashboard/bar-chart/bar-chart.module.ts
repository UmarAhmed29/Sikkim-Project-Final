import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
      BarChartComponent
  ],
  exports: [
      BarChartComponent
  ]
})
export class BarChartModule { }
