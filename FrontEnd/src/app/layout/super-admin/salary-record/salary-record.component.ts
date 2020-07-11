import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { EmployeeDetailService } from './../../../provider/employeeDetail/employeeDetail.service';
import { SalaryService } from './../../../provider/salary/salary.service';
@Component({
    selector: 'app-salary-record',
    templateUrl: './salary-record.component.html',
    styleUrls: ['./salary-record.component.scss']
})
export class SalaryRecordComponent implements OnInit {
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    // model: any = { date: { day: this.date, month: this.month, year: this.year } };
    // todayDate = this.date + "." + this.month + "." + this.year;
    // dateSelect = this.date + "." + this.month + "." + this.year;
    dateSelect = "";
    model = "";
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    public myForm: FormGroup;
    employeeSalaryData = [];
    checkDateSelect = false;
    isSubmit = false;
    schoolID;
    allStudentData;
    constructor(private formBuilder: FormBuilder, private salaryService: SalaryService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse._id;
        this.getStudents();
    }
    getStudents() {
        this.salaryService.salaryRecord({ schoolID: this.schoolID, month: this.month, year: this.year })
            .subscribe(
            data => {
                this.employeeSalaryData = data;
                console.log(this.employeeSalaryData)
                this.isSubmit = true
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    submit() {
        // this.getStudents(this.myForm.value.class);//function call
        if (this.month == "" || this.year == "") {
            alert("Please Fill Month & Year")
        } else {
            var data = {};
            if (this.dateSelect == "" && this.myForm.value.employeeID == "" || this.dateSelect == null && this.myForm.value.employeeID == null
                , this.dateSelect == "" && this.myForm.value.employeeID == null || this.dateSelect == null && this.myForm.value.employeeID == "") {
                data = {
                    schoolID: this.schoolID,
                    month: this.myForm.value.month,
                    year: this.myForm.value.year,
                }
            }
            else if (this.dateSelect == "" || this.dateSelect == null) {
                if (this.myForm.value.employeeID == null || this.myForm.value.employeeID == "") {
                    data = {
                        schoolID: this.schoolID,
                        month: this.myForm.value.month,
                        year: this.myForm.value.year,
                    }
                } else {
                    data = {
                        employeeID: this.myForm.value.employeeID,
                        schoolID: this.schoolID,
                        month: this.myForm.value.month,
                        year: this.myForm.value.year,
                    }
                }
            }
            else if (this.myForm.value.employeeID == null || this.myForm.value.employeeID == "") {
                if (this.dateSelect == "") {
                    data = {
                        schoolID: this.schoolID,
                        month: this.myForm.value.month,
                        year: this.myForm.value.year,
                    }
                } else {
                    data = {
                        submitionDate: this.dateSelect,
                        schoolID: this.schoolID,
                        month: this.myForm.value.month,
                        year: this.myForm.value.year,
                    }
                }
            }
            else {
                data = {
                    submitionDate: this.dateSelect,
                    schoolID: this.schoolID,
                    employeeID: this.myForm.value.employeeID,
                    month: this.myForm.value.month,
                    year: this.myForm.value.year,
                }
            }
            // console.log(this.dateSelect);
            // console.log(data)
            this.salaryService.salaryRecord(data)
                .subscribe(
                data => {
                    // for (var i = 0; i < this.allStudentData.length; i++) {
                    //     if (this.allStudentData[i]._id == data[i].studentID) {
                    //         this.employeeSalaryData[i] = data[i]
                    //         this.employeeSalaryData[i].isFeesSubmit = "Submitted";
                    //     }
                    //     else {
                    //         this.employeeSalaryData = data[i]
                    //         this.employeeSalaryData[i].isFeesSubmit = "Not Submitted";
                    //     }
                    // }
                    this.employeeSalaryData = data;
                    console.log(this.employeeSalaryData)
                    this.isSubmit = true;
                },
                err => { alert("Something Went Wrong"); console.log(err) }
                );
        }
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            // Empty string or null means no initial value. Can be also specific date for
            // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
            // value.
            myDate: [null, Validators.required],
            employeeID: [null, Validators.required],
            month: [null, Validators.required],
            year: [null, Validators.required],
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
    }
}