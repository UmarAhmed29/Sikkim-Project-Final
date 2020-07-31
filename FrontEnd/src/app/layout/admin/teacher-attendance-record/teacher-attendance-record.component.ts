import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AttendanceService } from './../../../provider/attendance/attendance.service';
// IndexedDb imports
import { TeacherAttendanceService } from '../../../provider/IndexedDb/teacher-attendance.service';
import { Teacher, ITeacherAttendance } from '../../../provider/model/teacherAttendance';
import { TeacherService } from '../../../provider/IndexedDb/teacher.service';
@Component({
  selector: 'app-teacher-attendance-record',
  templateUrl: './teacher-attendance-record.component.html',
  styleUrls: ['./teacher-attendance-record.component.css'],
  providers: [TeacherService, TeacherAttendanceService]
})
export class TeacherAttendanceRecordComponent implements OnInit {

    teachersList = [];
    private teacherService: TeacherService;
    private teacherAttendanceService: TeacherAttendanceService;
    searchData = false;
    schoolID;
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
  constructor(private formBuilder: FormBuilder,
        private attendanceService: AttendanceService,
        teacherService: TeacherService,
        teacherAttendanceService: TeacherAttendanceService) {
            this.teacherService = teacherService;
            this.teacherAttendanceService = teacherAttendanceService;
            var schoolDetail = localStorage.getItem('currentUser');
            var schoolDetailParse = JSON.parse(schoolDetail);
            this.schoolID = schoolDetailParse._id;
        }

  ngOnInit() {
      this.myForm = this.formBuilder.group({
          date: [null, Validators.required]
      });
  }

  onDateChanged(event: IMyDateModel) { // calender k change krne se jo data araha
        this.dateSelect = event.formatted;
        // console.log(event.formatted);
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        var data = {
            schoolID: schoolDetailParse._id,
            attendanceDate: event.formatted
        }
    }

    //   search specific students from class, section
    async search() {
        console.log(this.dateSelect);
        try {
            this.teachersList = await this.teacherAttendanceService.getTeacherAttendance(this.dateSelect);
            if (this.teachersList.length > 0) {
                this.searchData = true;
            } else {
                alert('No data found!');
                return;
            }
        } catch (error) {
            // console.error(error);
            // alert(error.message);
            alert('Please select Date');
        }
    }
}
