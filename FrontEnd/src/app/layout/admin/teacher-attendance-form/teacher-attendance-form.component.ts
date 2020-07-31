import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetailService } from '../../../provider/employeeDetail/employeeDetail.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AttendanceService } from '../../../provider/attendance/attendance.service';
// IndexedDb imports
import { TeacherAttendanceService } from '../../../provider/IndexedDb/teacher-attendance.service';
import { Teacher, ITeacherAttendance } from '../../../provider/model/teacherAttendance';
import { TeacherService } from '../../../provider/IndexedDb/teacher.service';
const now = new Date();
@Component({
  selector: 'app-teacher-attendance-form',
  templateUrl: './teacher-attendance-form.component.html',
  styleUrls: ['./teacher-attendance-form.component.css'],
  providers: [TeacherService, TeacherAttendanceService]
})
export class TeacherAttendanceFormComponent implements OnInit {

    teachersList = [];
    private teacherService: TeacherService;
    private teacherAttendanceService: TeacherAttendanceService;
    searchData = false;
    check;

    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    todayDate = this.date + '.' + this.month + '.' + this.year;
    dateSelect = this.date + '.' + this.month + '.' + this.year;
    model: any = { date: { day: this.date, month: this.month, year: this.year } };
    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd/mm/yyyy',
  };

    public myForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private employeeDetailService: EmployeeDetailService,
        private attendanceService: AttendanceService,
        teacherService: TeacherService,
        teacherAttendanceService: TeacherAttendanceService) {
            this.teacherService = teacherService;
            this.teacherAttendanceService = teacherAttendanceService;
            var schoolDetail = localStorage.getItem('currentUser');
            var schoolDetailParse = JSON.parse(schoolDetail);
        }

  ngOnInit() {
      this.myForm = this.formBuilder.group({
          cls: [null, Validators.required],
          section: [null, Validators.required],
          date: [null, Validators.required]
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
  onDateChanged(event: IMyDateModel) { // calender k change krne se jo data araha
    this.dateSelect = event.formatted;
    // console.log(event.formatted)
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }

  //   search specific students from class, section
  async search() {
    try {
        this.teachersList = await this.teacherService.getTeachers();
        if (this.teachersList.length > 0) {
            this.searchData = true;
        }else {
            alert('No data found!');
            return;
        }
        } catch (error) {
            // console.error(error);
            // alert(error.message);
            alert('Please select Date');
        }
  }

// when the checkbox in attendance form is checked then attendance will be submitted
// and will be stored in IndexedDB
  async changeAttendancePresent(e, type) { // checkbox k change krne se jo data araha
    var Data = type;
    // if checkbox for attendance is checked then attendance will be marked 'present'
    if (e.target.checked == true) {
        var data = {
          attendanceDate: this.dateSelect,
          attendance: 'present',
          reg_num: Data.reg_num,
          teacherName: Data.teacherName,
          subject: Data.subject,
          schoolID: Data.schoolID
        }
        try {
            const attendanceSubmitted = await this.teacherAttendanceService.addTeacherAttendance(data) as ITeacherAttendance[];
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
      this.check = true;
    }
  }

    async changeAttendanceAbsent(e, type) { // checkbox k change krne se jo data araha
        var Data = type;
        // if checkbox for attendance is not checked then attendance will be marked 'absent'
        if (e.target.checked == true) {
            var data = {
                attendanceDate: this.dateSelect,
                attendance: 'absent',
                reg_num: Data.reg_num,
                teacherName: Data.studentName,
                schoolID: Data.schoolID,
                subject: Data.subject
            }
            try {
                const attendanceSubmitted = await this.teacherAttendanceService.addTeacherAttendance(data) as ITeacherAttendance[];
                // if (attendanceSubmitted.length > 0) {
                //     alert('Teacher Registration Successfull');
                // }
            } catch (error) {
                console.error(error);
                alert(error.message);
            }
            this.check = true;
        }
    }
    submitAttendance() {
        alert('Attendance Submitted Successfully.');
        this.search();
    }

}
