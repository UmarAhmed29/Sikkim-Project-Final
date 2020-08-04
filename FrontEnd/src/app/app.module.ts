import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './provider/auth.service';
import { ViewSchoolService } from './provider/viewSchool/viewSchool.service';
import { EmployeeDetailService } from './provider/employeeDetail/employeeDetail.service';
import { StudentDetailService } from './provider/studentDetail/studentDetail.service';
import { AttendanceService } from './provider/attendance/attendance.service';
import { FeesService } from './provider/fees/fees.service';
import { SalaryService } from './provider/salary/salary.service';
import { MyDatePickerModule } from 'mydatepicker';
import { environment } from '../environments/environment';
import { ModuleWithProviders } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartsModule } from 'ng2-charts';
// import { BarChartComponent } from '../app/layout/dashboard/bar-chart/bar-chart.component';
import { DashboardModule } from './layout/dashboard/dashboard.module';


// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//     // for development
//     return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
// }
@NgModule({
    declarations: [
        AppComponent,
        // BarChartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        // Http,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ChartsModule,
        DashboardModule,
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: HttpLoaderFactory,
        //         deps: [Http]
        //     }
        // })
        ServiceWorkerModule.register('./service-worker.js', {
        enabled: environment.production,
    }),
    ],
    providers: [AuthService,AuthGuard,ViewSchoolService,EmployeeDetailService,
    StudentDetailService,AttendanceService,FeesService,SalaryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
