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
    selector: 'app-employee-attendence',
    templateUrl: './employee-attendence.component.html',
    styleUrls: ['./employee-attendence.component.scss']
})
export class EmployeeAttendenceComponent implements OnInit {
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    model: any = { date: { day: this.date, month: this.month, year: this.year } };
    todayDate = this.date + "." + this.month + "." + this.year;
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    schoolID;
    public myForm: FormGroup;
    attendanceData;
    employeeID;
    employeeName;
    isSubmit;
    dateSelect;
    email;
    attendanceDate;
    constructor(private attendanceService: AttendanceService, private formBuilder: FormBuilder, ) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse.schoolID;
        this.employeeID = schoolDetailParse.employeeID;
        this.email = schoolDetailParse.email;
        console.log(this.schoolID, this.email, this.employeeID);
        this.attendanceService.attendanceRecord({ schoolID: this.schoolID, employeeID: this.employeeID,month:this.month,year:this.year })
            .subscribe(
            data => {
                console.log(data);
                this.attendanceData = data;
                this.isSubmit = true;
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    submit() {
        // this.getStudents(this.myForm.value.class);//function call
        if (this.month == "" || this.year == "") {
            alert("Please Fill Month & Year")
        }
        else {
            var data = {};
            if (this.dateSelect == "" || this.dateSelect == null) {
                data = {
                    schoolID: this.schoolID,
                    email: this.email,
                    month: this.myForm.value.month,
                    year: this.myForm.value.year,
                    employeeID: this.employeeID,
                }
            }
            else {
                data = {
                    submitionDate: this.dateSelect,
                    schoolID: this.schoolID,
                    email: this.email,
                    month: this.myForm.value.month,
                    year: this.myForm.value.year,
                    employeeID: this.employeeID,
                }
            }
            console.log(data);
            this.attendanceService.attendanceRecord(data)
                .subscribe(
                data => {
                    this.attendanceData = data;
                    console.log(this.attendanceData)
                    this.isSubmit = true;
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            myDate: [null, Validators.required],
            month: [null, Validators.required],
            year: [null, Validators.required],
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
        if (this.month == "" || this.year == "") {
            alert("Please Fill Month & Year")
        }
        else {
            var data = {
                email:this.email,
                schoolID: this.schoolID,
                attendanceDate: event.formatted,
                employeeID: this.employeeID,
                month: this.month,
                year: this.year,
            }
            console.log(data)
            this.attendanceService.attendanceRecord(data)
                .subscribe(
                data => {
                    // this.allAttendanceRecord(data);//function call
                    console.log(data);
                    this.attendanceData = data;
                    this.isSubmit = true;
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }
    }
}