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
    selector: 'app-fees-form',
    templateUrl: './fees-form.component.html',
    styleUrls: ['./fees-form.component.scss']
})
export class FeesFormComponent implements OnInit {
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    model: any = { date: { day: this.date, month: this.month, year: this.year } };
    todayDate = this.date + "." + this.month + "." + this.year;
    dateSelect = this.date + "." + this.month + "." + this.year;
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    public myForm: FormGroup;
    studentData;
    checkDateSelect = false;
    isSubmit = false;
    schoolID;
    constructor(private formBuilder: FormBuilder, private feesService: FeesService, private studentDetailService: StudentDetailService) {

    }
    submit() {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse._id;
        var data = {
            schoolID: this.schoolID,
            QRno: this.myForm.value.QRno,
            class: this.myForm.value.class
        }
        console.log(data)
        this.studentDetailService.studentDetail(data)
            .subscribe(
            data => {
                console.log(data);
                this.studentData = data;
                this.isSubmit = true;
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    feesSubmit(data) {
        console.log(data);
        var dataObj = {
            email: data.email,
            studentName: data.studentName,
            fatherName: data.fatherName,
            submitionDate: this.dateSelect,
            QRno: data.QRno,
            studentFees: data.studentFees,
            month:this.month,
            year:this.year,
            class: data.class,
            schoolID: this.schoolID,
        }
        console.log(dataObj);
        this.feesService.feesSubmit(dataObj)
            .subscribe(
            data => {
                console.log(data)
                this.isSubmit = false;
                alert("Fees Submitted");
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
            QRno: [null, Validators.required],
            class: [null, Validators.required]
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
