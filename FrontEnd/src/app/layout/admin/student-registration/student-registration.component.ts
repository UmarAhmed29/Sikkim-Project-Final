import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../provider/auth.service';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
// indexeddb imports
import { StudentService } from '../../../provider/IndexedDb/student.service';
import { Student, IStudent } from '../../../provider/model/student';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const now = new Date();

@Component({
    selector: 'app-student-registration',
    templateUrl: './student-registration.component.html',
    styleUrls: ['./student-registration.component.css'],
    providers: [StudentService],
    animations: [routerTransition()]
})
export class StudentRegistrationComponent implements OnInit {
    // indexeddb part start
    private service: StudentService;
    students: Array<IStudent> = [];
    newStudent: IStudent = new Student();
    oldStudent: IStudent = new Student();
    // indexeddb part end
    RegistrationForm: FormGroup;
    d = new Date();
    date = this.d.getDate().toString();
    year = this.d.getFullYear().toString();
    months = this.d.getMonth() + 1;
    month = this.months.toString();
    todayDate = this.date + '.' + this.month + '.' + this.year;
    dateSelect = this.date + '.' + this.month + '.' + this.year;
    model: any = { date: { day: this.date, month: this.month, year: this.year } };
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };

    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService, service: StudentService) {
        this.service = service;
        this.createForm();
        // this.router.navigate(['dashboard']);
    }
    createForm() {
        this.RegistrationForm = this.fb.group({
            studentName: ['', [Validators.required]],
            fatherName: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            rollnum: ['', [Validators.required]],
            blood_grp: ['', [Validators.required]],
            religion: ['', [Validators.required]],
            email: [''],
            cls: ['', [Validators.required]],
            section: ['', [Validators.required]],
            adm_id: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]]
        })
    }
    ngOnInit() {
    }
    addStudent() {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.RegistrationForm.value['schoolID'] = schoolDetailParse._id;
            this.authService.registrationStudent(this.RegistrationForm.value)
            .map(
           data => {console.log(data); return data },
           err => {console.log(err); return err}
           ).subscribe(
               data => {
              alert('Registeration Successfully');
            },
               err => {alert('Email & Password Invalid'); console.log(err)}
            );
            this.router.navigate(['students-detail'])
            localStorage.setItem('isLoggedin', 'true');
    }

    onDateChanged(event: IMyDateModel) { //calender k change krne se jo data araha
    this.dateSelect = event.formatted;
    console.log(event.formatted)
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

    // IndexedDb functions
    async addStudentIDB() {
        this.newStudent.dob = this.dateSelect;
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.newStudent['schoolID'] = schoolDetailParse._id;
        this.newStudent.timeStamp = this.DateTime();
        try {
            const addedStudents = await this.service.addStudent(this.newStudent) as IStudent[];
            if (addedStudents.length > 0) {
                this.students.push(addedStudents[0]);
                this.clearNewStudent();
                alert('Student Registration Successfull');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    clearNewStudent() {
        this.newStudent = new Student();
    }

    DateTime() {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var dateTime = date + ' ' + time;
        return dateTime;
    }
}
