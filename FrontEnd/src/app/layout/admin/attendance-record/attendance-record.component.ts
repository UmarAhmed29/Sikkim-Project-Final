import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetailService } from './../../../provider/employeeDetail/employeeDetail.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AttendanceService } from './../../../provider/attendance/attendance.service';
// IndexedDb imports
import { StudentAttendanceService } from '../../../provider/IndexedDb/student-attendance.service';
import { Student, IStudentAttendance } from '../../../provider/model/studentAttendance';
import { StudentService } from '../../../provider/IndexedDb/student.service';
@Component({
    selector: 'app-attendance-record',
    templateUrl: './attendance-record.component.html',
    styleUrls: ['./attendance-record.component.css'],
    providers: [StudentService, StudentAttendanceService]
})
export class AttendanceRecordComponent implements OnInit {
    S_cls;
    S_section;
    studentsList = [];
    private studentService: StudentService;
    private studentAttendanceService: StudentAttendanceService;
    searchData = false;
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    model: any = { date: { day: this.date, month: this.month, year: this.year } };
    todayDate = this.date + '.' + this.month + '.' + this.year;
    // dateSelect;
    dateSelect = this.date + '.' + this.month + '.' + this.year;
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };
    public myForm: FormGroup;
    employeesData;
    attendanceData = [];
    checkDateSelect = false;
    isSubmit = false;
    schoolID;
    constructor(private formBuilder: FormBuilder,
        private employeeDetailService: EmployeeDetailService,
        private attendanceService: AttendanceService,
        studentService: StudentService,
        studentAttendanceService: StudentAttendanceService) {
        // Get All Employees Data
        this.studentService = studentService;
        this.studentAttendanceService = studentAttendanceService;
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse._id;
        this.employeeDetailService.employeeDetail({ schoolID: this.schoolID })
            .subscribe(
            data => {
                this.employeesData = data;
                for (var i = 0; i < this.employeesData.length; i++) {
                    this.employeesData[i].attendence = 'absent'
                    this.employeesData[i].attendanceDate = this.dateSelect;
                }
            },
            err => { alert('Something Went Wrong'); console.log(err) }
            );
    }
    allAttendanceRecord(data) {
        this.attendanceData = data;
        console.log(this.employeesData);
        console.log(data);
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
                this.allAttendanceRecord(data); // function call
            },
            err => { alert('Something Went Wrong'); console.log(err) }
            );
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            cls: [null, Validators.required],
            section: [null, Validators.required],
            date: [null, Validators.required]
        });
    }
    onDateChanged(event: IMyDateModel) { // calender k change krne se jo data araha
        this.dateSelect = event.formatted;
        console.log(event.formatted);
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        var data = {
            schoolID: schoolDetailParse._id,
            attendanceDate: event.formatted
        }
        // console.log(data)
        // this.attendanceService.attendanceRecord(data)
        //     .subscribe(
        //     data => {
        //         this.allAttendanceRecord(data); // function call
        //     },
        //     err => { alert('Something Went Wrong'); console.log(err) }
        //     );
    }

    //   search specific students from class, section
    async search() {
        console.log(this.dateSelect);
        this.S_cls = this.myForm.value.cls;
        this.S_section = this.myForm.value.section;
        try {
            this.studentsList = await this.studentAttendanceService.getStudentAttendanceByClass(this.S_cls, this.S_section, this.dateSelect);
            if (this.studentsList.length > 0) {
                this.searchData = true;
            } else {
                alert('No data found!');
                return;
            }
        } catch (error) {
            // console.error(error);
            // alert(error.message);
            alert('Please select Class and Section');
        }
    }
}
