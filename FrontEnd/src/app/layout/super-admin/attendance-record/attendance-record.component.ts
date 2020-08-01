import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetailService } from './../../../provider/employeeDetail/employeeDetail.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AttendanceService } from './../../../provider/attendance/attendance.service';
@Component({
    selector: 'app-attendance-record',
    templateUrl: './attendance-record.component.html',
    styleUrls: ['./attendance-record.component.scss']
})
export class AttendanceRecordComponent implements OnInit {
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    model: any = { date: { day: this.date, month: this.month, year: this.year } };
    todayDate = this.date + "." + this.month + "." + this.year;
    dateSelect;
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    public myForm: FormGroup;
    employeesData;
    attendanceData = [];
    checkDateSelect = false;
    isSubmit = false;
    schoolID;
    constructor(private formBuilder: FormBuilder, private employeeDetailService: EmployeeDetailService, private attendanceService: AttendanceService) {
        //Get All Employees Data 
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse._id;
        this.employeeDetailService.employeeDetail({ schoolID: this.schoolID })
            .subscribe(
            data => {
                this.employeesData = data;
                for (var i = 0; i < this.employeesData.length; i++) {
                    this.employeesData[i].attendence = "absent"
                    this.employeesData[i].attendanceDate = this.dateSelect;
                }
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    allAttendanceRecord(data) {
        this.attendanceData = data;
        console.log(this.employeesData);
        console.log(data);
        // for (var i = 0; i < this.employeesData.length; i++) {
        //     if (data[i]) {
        //         var check = false;
        //         for (var j = 0; j < this.employeesData.length; j++) {
        //             if (this.employeesData[j].employeeID == data[i].employeeID) {
        //                 // console.log("Present");
        //                 alert("present")
        //                 check = true;
        //                 // break;
        //                 // this.attendanceData[i].push(data[i])
        //                 // this.attendanceData[i].isAttendance = "Present";
        //             }
        //             else {
        //                 check = false;
        //                 // console.log("absent");
        //                 // break;
        //                 // this.attendanceData.push(data[i])
        //                 // this.attendanceData[i].isAttendance = "Absent";
        //             }
        //         }if(check==true){console.log("present")}else{console.log("absent");}
        //     }
        //     else {
        //         console.log("absent");
        //     }
        // }
        // console.log(this.attendanceData);
        this.isSubmit = true;
    }
    attendanceCheck() {
        var data = {
            schoolID: this.schoolID,
            attendanceDate: this.dateSelect,
            employeeID: this.myForm.value.employeeID
        }
        console.log(data)
        this.attendanceService.attendanceRecord(data)
            .subscribe(
            data => {
                this.allAttendanceRecord(data);//function call
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            // Empty string or null means no initial value. Can be also specific date for
            // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
            // value.
            myDate: [null, Validators.required],
            employeeID: [null, Validators.required]
            // other controls are here...
        });
    }
    setDate(): void {
        // Set today date using the patchValue function
        let date = new Date();
        this.myForm.patchValue({
            myDate: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            }
        });
    }

    clearDate(): void {
        // Clear the date using the patchValue function
        this.myForm.patchValue({ myDate: null });
    }
    onDateChanged(event: IMyDateModel) { //calender k change krne se jo data araha
        this.dateSelect = event.formatted;
        console.log(event.formatted)
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        var data = {
            schoolID: schoolDetailParse._id,
            attendanceDate: event.formatted
        }
        console.log(data)
        this.attendanceService.attendanceRecord(data)
            .subscribe(
            data => {
                this.allAttendanceRecord(data);//function call
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
}