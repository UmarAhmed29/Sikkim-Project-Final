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
import { StudentDetailService } from './../../../provider/studentDetail/studentDetail.service';
import { FeesService } from './../../../provider/fees/fees.service';
@Component({
    selector: 'app-student-fee',
    templateUrl: './student-fee.component.html',
    styleUrls: ['./student-fee.component.scss']
})
export class StudentFeeComponent implements OnInit {
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
    studentFeesData = [];
    checkDateSelect = false;
    isSubmit = false;
    schoolID;
    allStudentData;
    email;
    QRno;
    constructor(private formBuilder: FormBuilder, private feesService: FeesService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse.schoolID;
        this.email = schoolDetailParse.email;
        this.QRno = schoolDetailParse.QRno;
        this.feesService.feesRecord({ schoolID: this.schoolID, QRno: this.QRno, year: this.year, email: this.email })
            .subscribe(
            data => {
                this.studentFeesData = data;
                console.log(this.studentFeesData)
                this.isSubmit = true;
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    submit() {
        if (this.year == "") {
            alert("Please Fill Month & Year")
        }
        else {
            var data = {};
            console.log(this.allStudentData);
            if (this.dateSelect == "" || this.dateSelect == null) {
                if (this.month !== "") {
                    data = {
                        email: this.email,
                        QRno: this.QRno,
                        schoolID: this.schoolID,
                        year: this.myForm.value.year,
                        month: this.myForm.value.month
                    }
                } else {
                    data = {
                        email: this.email,
                        QRno: this.QRno,
                        schoolID: this.schoolID,
                        year: this.myForm.value.year,
                    }
                }
            }
            else {
                if (this.month !== "") {
                    data = {
                        email: this.email,
                        QRno: this.QRno,
                        schoolID: this.schoolID,
                        submitionDate: this.dateSelect,
                        year: this.myForm.value.year,
                        month: this.myForm.value.month
                    }
                } else {
                    data = {
                        email: this.email,
                        QRno: this.QRno,
                        schoolID: this.schoolID,
                        submitionDate: this.dateSelect,
                        year: this.myForm.value.year,
                    }
                }
            }
            console.log(data)
            this.feesService.feesRecord(data)
                .subscribe(
                data => {
                    this.studentFeesData = data;
                    console.log(this.studentFeesData)
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
