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
import { StudentAttendanceService } from '../../../provider/IndexedDb/student-attendance.service';
import { Student, IStudentAttendance } from '../../../provider/model/studentAttendance';
import { StudentService } from '../../../provider/IndexedDb/student.service';
const now = new Date();

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css'],
  providers: [StudentService, StudentAttendanceService]
})
export class AttendanceFormComponent implements OnInit {
    S_cls;
    S_section;
    studentsList = [];
    private studentService: StudentService;
    private studentAttendanceService: StudentAttendanceService;
    searchData = false;
  check;
  isSubmit = false;
  d = new Date();
  date = this.d.getDate().toString();
  year = this.d.getFullYear().toString();
  months = this.d.getMonth() + 1;
  month = this.months.toString();
  todayDate = this.date + "." + this.month + "." + this.year;
  dateSelect = this.date + "." + this.month + "." + this.year;
  model: any = { date: { day: this.date, month: this.month, year: this.year } };
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  public myForm: FormGroup;
  employeeData = [];
  attendanceData;
  checkDateSelect = false;

    constructor(private formBuilder: FormBuilder, private employeeDetailService: EmployeeDetailService, private attendanceService: AttendanceService, studentService: StudentService, studentAttendanceService: StudentAttendanceService) {
    // this.createForm();
    // console.log("day"+this.date,"year"+this.year,"month"+this.month)
    this.studentService = studentService;
    this.studentAttendanceService = studentAttendanceService;
    var schoolDetail = localStorage.getItem('currentUser');
    var schoolDetailParse = JSON.parse(schoolDetail);
    // this.employeeDetailService.employeeDetail({ schoolID: schoolDetailParse._id })
    //   .subscribe(
    //   data => {
    //     this.attendanceData = data;
    //     for (var i = 0; i < this.attendanceData.length; i++) {
    //       this.attendanceData[i].attendance = "absent"
    //       this.attendanceData[i].attendanceDate = this.dateSelect;
    //     }
    //   },
    //   err => { alert("Something Went Wrong"); console.log(err) }
    //   );
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
  onDateChanged(event: IMyDateModel) { //calender k change krne se jo data araha
    this.dateSelect = event.formatted;
    // console.log(event.formatted)
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }
  change(e, type) { //checkbox k change krne se jo data araha
    console.log(e.target.checked);
    console.log(type);
    var Data = type
    if (e.target.checked == true) {
        var data = {
          email: Data.email,
          attendanceDate: this.dateSelect,
          attendance: 'present',
          employeeID: Data.employeeID,
          employeeName: Data.employeeName,
          employeeType: Data.employeeType,
          schoolID: Data.schoolID,
          month: this.month,
          year: this.year
        }
      console.log(data)
      this.attendanceService.attendanceSubmit(data)
       .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
        data => {
          console.log(data)
          alert('Attendance Submitted');
        },
        err => { alert('Something Went Wrong'); console.log(err) }
        );
      this.check = true;
    }
  }

//   search specific students from class, section
  async search() {
    this.S_cls = this.myForm.value.cls;
    this.S_section = this.myForm.value.section;
    try {
        this.studentsList = await this.studentService.getStudentByClass(this.S_cls, this.S_section);
        if (this.studentsList.length > 0) {
            this.searchData = true;
        }else {
            alert('No data found!');
            return;
        }
        } catch (error) {
            // console.error(error);
            // alert(error.message);
            alert('Please select Class and Section');
        }
  }

// when the checkbox in attendance form is checked then attendance will be submitted
// and will be stored in IndexedDB
  async changeAttendancePresent(e, type) { // checkbox k change krne se jo data araha
    var Data = type;
    var datetime = this.DateTime();
    // if checkbox for attendance is checked then attendance will be marked 'present'
    if (e.target.checked == true) {
        var data = {
          attendanceDate: this.dateSelect,
          attendance: 'present',
          rollnum: Data.rollnum,
          studentName: Data.studentName,
          cls: Data.cls,
          section: Data.section,
          schoolID: Data.schoolID,
          month: this.myForm.value.month,
          year: this.myForm.value.year,
          timeStamp: datetime
        }
        try {
            const attendanceSubmitted = await this.studentAttendanceService.addStudentAttendance(data) as IStudentAttendance[];
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

    async changeAttendanceAbsent(e, type) { // checkbox k change krne se jo data araha
        var Data = type;
        var datetime = this.DateTime();
        // if checkbox for attendance is not checked then attendance will be marked 'absent'
        if (e.target.checked == true) {
            var data = {
                attendanceDate: this.dateSelect,
                attendance: 'absent',
                rollnum: Data.rollnum,
                studentName: Data.studentName,
                cls: Data.cls,
                section: Data.section,
                schoolID: Data.schoolID,
                month: this.myForm.value.month,
                year: this.myForm.value.year,
                timeStamp: datetime
            }
            try {
                const attendanceSubmitted = await this.studentAttendanceService.addStudentAttendance(data) as IStudentAttendance[];
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

    DateTime() {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var dateTime = date + ' ' + time;
        return dateTime;
    }

    checkAll(ele) {

        console.log(ele);
    var checkboxes = document.getElementsByTagName('input');
    if (ele.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    }
    console.log(ele);
}

}
