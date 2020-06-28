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

const now = new Date();

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {
  check;
  isSubmit = false;
  d = new Date();
  date = this.d.getDate().toString();
  year = this.d.getFullYear().toString();
  months = this.d.getMonth() + 1;
  month = this.months.toString();
  todayDate = this.date + "." + this.month + "." + this.year;
  dateSelect = this.date + "." + this.month + "." + this.year;
  // if(month < 10) {
  //   this.month = "0" + month;
  // };
  model: any = { date: { day: this.date, month: this.month, year: this.year } };
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  public myForm: FormGroup;
  employeeData = [];
  attendanceData;
  checkDateSelect = false;

  constructor(private formBuilder: FormBuilder, private employeeDetailService: EmployeeDetailService, private attendanceService: AttendanceService) {
    // this.createForm();
    // console.log("day"+this.date,"year"+this.year,"month"+this.month)
    var schoolDetail = localStorage.getItem('currentUser');
    var schoolDetailParse = JSON.parse(schoolDetail);
    this.employeeDetailService.employeeDetail({ schoolID: schoolDetailParse._id })
      .subscribe(
      data => {
        console.log(data);
        this.attendanceData = data;
        for (var i = 0; i < this.attendanceData.length; i++) {
          this.attendanceData[i].attendance = "absent"
          this.attendanceData[i].attendanceDate = this.dateSelect;
        }
      },
      err => { alert("Something Went Wrong"); console.log(err) }
      );
  }

  attendanceSubmit() {
    this.check = false;
    console.log(this.myForm.value.employeeID);
    for (var i = 0; i < this.attendanceData.length; i++) {
      if (this.attendanceData[i].employeeID == this.myForm.value.employeeID) {
        var data={
          email:this.attendanceData[i].email,
          attendanceDate:this.dateSelect,
          attendance:"present",
          employeeID:this.attendanceData[i].employeeID,
          employeeName:this.attendanceData[i].employeeName,
          employeeType:this.attendanceData[i].employeeType,
          schoolID:this.attendanceData[i].schoolID,
          month:this.month,
          year:this.year
        }
        console.log(data);
        this.attendanceService.attendanceSubmit(data)
          .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
          data => {
            console.log(data)
            alert("Attendeance Submitted");
          },
          err => { alert("Something Went Wrong"); console.log(err) }
          );
        this.check = true;
        break;
      }
    }
    if (this.check == false) {
      alert("Wrong Employee ID");
    }
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
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }
  change(e, type) { //checkbox k change krne se jo data araha
    console.log(e.target.checked);
    console.log(type);
    var Data = type
    if (e.target.checked == true) {
      // delete Data.email
        var data={
          email:Data.email,
          attendanceDate:this.dateSelect,
          attendance:"present",
          employeeID:Data.employeeID,
          employeeName:Data.employeeName,
          employeeType:Data.employeeType,
          schoolID:Data.schoolID,
          month:this.month,
          year:this.year
        }
      console.log(data)
      this.attendanceService.attendanceSubmit(data)
       .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
        data => {
          console.log(data)
          alert("Attendeance Submitted");
        },
        err => { alert("Something Went Wrong"); console.log(err) }
        );
      this.check = true;
    }
    // for (var i = 0; i < this.attendanceData.length; i++) {
    //   if (this.attendanceData[i]._id === type._id) {
    //     if (e.target.checked == true) {
    //       this.attendanceData[i].attendance = "present";
    //       this.attendanceData[i].attendanceDate = this.todayDate;
    //       // break;
    //     }
    //     else {
    //       this.attendanceData[i].attendance = "absent";
    //       this.attendanceData[i].attendanceDate = this.todayDate;
    //       // break;
    //     }
    //   }
    //   else if (this.attendanceData[i].attendance == "present") {
    //     this.attendanceData[i].attendance = "present";
    //     this.attendanceData[i].attendanceDate = this.todayDate;
    //     // break;
    //   }
    //   else {
    //     this.attendanceData[i].attendance = "absent";
    //     this.attendanceData[i].attendanceDate = this.todayDate;
    //   }
    // }
  }
  submit() {
    console.log(this.attendanceData);
    // if (this.todayDate !== "") {
    // for (var i = 0; i < this.attendanceData.length; i++) {
    //   delete this.attendanceData[i].email
    //   delete this.attendanceData[i].fatherName
    //   delete this.attendanceData[i].password
    //   delete this.attendanceData[i].registrationDate
    //   delete this.attendanceData[i].salary
    //   delete this.attendanceData[i].type
    // }
    // console.log(this.attendanceData);
    //   var attendanceRecord = {}
    //   var result = {};
    //   for (var i = 0; i < this.attendanceData.length; i++) {
    //     result[this.attendanceData[i].employeeID] = this.attendanceData[i];
    //   }
    //   console.log(result)
    //   this.attendanceService.attendanceSubmit(result)
    //     .subscribe(
    //     data => {
    //       this.employeeData = data;
    //       this.isSubmit = true;
    //       alert("Attendeance Submitted");
    //     },
    //     err => { alert("Something Went Wrong"); console.log(err) }
    //     );
    // }
    // else {
    //   alert("Please Select Date");
    // }
  }
}