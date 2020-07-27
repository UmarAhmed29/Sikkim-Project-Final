import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../provider/auth.service';
import { IMyDpOptions, IMyDateModel } from "mydatepicker";
// IndexedDb imports
import { TeacherService } from '../../../provider/IndexedDb/teacher.service';
import { Teacher, ITeacher } from '../../../provider/model/teacher';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const now = new Date();

@Component({
    selector: 'app-employee-registration',
    templateUrl: './employee-registration.component.html',
    styleUrls: ['./employee-registration.component.css'],
    providers: [TeacherService],
    animations: [routerTransition()]
})
export class EmployeeRegistrationComponent implements OnInit {
    // indexeddb part start
    private service: TeacherService;
    teachers: Array<ITeacher> = [];
    newTeacher: ITeacher = new Teacher();
    oldTeacher: ITeacher = new Teacher();
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
    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService, service: TeacherService) {
        this.service = service;
        this.createForm();
        // this.router.navigate(['dashboard']);
    }
    createForm() {
        this.RegistrationForm = this.fb.group({
            teacherName: ['', [Validators.required]],
            fatherName: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            religion: ['', [Validators.required]],
            blood_grp: ['', [Validators.required]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            email: ['', [Validators.required]],
            reg_num: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            exp: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            address: ['', [Validators.required]]
        });
    }
    ngOnInit() {
    }
    addEmployee() {
        console.log(this.RegistrationForm.value);
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.RegistrationForm.value.schoolID = schoolDetailParse._id;
        console.log(this.RegistrationForm.value);
        this.authService.registrationEmployee(this.RegistrationForm.value)
            .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
            data => {
                alert("Registeration Successfully");
            },
            err => { alert("Email & Password Invalid"); console.log(err) }
            );
        // location.reload();
        this.router.navigate(['employees-detail'])
        localStorage.setItem('isLoggedin', 'true');
    }

    onDateChanged(event: IMyDateModel) { //calender k change krne se jo data araha
    this.dateSelect = event.formatted;
    console.log(event.formatted)
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

    // IndexedDb functions
    async addTeacherIDB() {
        this.newTeacher.dob = this.dateSelect;
        try {
            const addedTeachers = await this.service.addTeacher(this.newTeacher) as ITeacher[];
            if (addedTeachers.length > 0) {
                this.teachers.push(addedTeachers[0]);
                this.clearNewTeacher();
                alert('Teacher Registration Successfull');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    clearNewTeacher() {
        this.newTeacher = new Teacher();
    }
}
