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
import { SalaryService } from './../../../provider/salary/salary.service';
@Component({
    selector: 'app-emp-receipt-voucher',
    templateUrl: './emp-receipt-voucher.component.html',
    styleUrls: ['./emp-receipt-voucher.component.scss']
})
export class EmpReceiptVoucherComponent implements OnInit {
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = "";
    // model: any = { date: { day: this.date, month: this.month, year: this.year } };
    // todayDate = this.date + "." + this.month + "." + this.year;
    dateSelect = "";
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
    employeeID;
    employeeName;
    email;
    constructor(private formBuilder: FormBuilder, private salaryService: SalaryService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse.schoolID;
        this.employeeID = schoolDetailParse.employeeID;
        this.email = schoolDetailParse.email;

        console.log(this.schoolID);
        this.salaryService.salaryRecord({ schoolID: this.schoolID, employeeID: this.employeeID, email: this.email })
            .subscribe(
            data => {
                console.log(data)
                this.employeeSalaryData = data;
                this.isSubmit = true;
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    submit() {
        // this.getStudents(this.myForm.value.class);//function call
        if (this.myForm.value.year == "") {
            alert("Must fill year");
        } else {
            var data = {};
            if (this.dateSelect == "" || this.dateSelect == null) {
                if (this.month !== "") {
                    data = {
                        email: this.email,
                        schoolID: this.schoolID,
                        year: this.myForm.value.year,
                        month: this.myForm.value.month,
                    }
                } else {
                    data = {
                        email: this.email,
                        schoolID: this.schoolID,
                        year: this.myForm.value.year,
                    }
                }
            }
            else {
                if (this.month !== "") {
                    data = {
                        email: this.email,
                        schoolID: this.schoolID,
                        submitionDate: this.dateSelect,
                        year: this.myForm.value.year,
                        month: this.myForm.value.month,
                    }
                } else {
                    data = {
                        email: this.email,
                        schoolID: this.schoolID,
                        submitionDate: this.dateSelect,
                        year: this.myForm.value.year,
                    }
                }
            }
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
    }
}