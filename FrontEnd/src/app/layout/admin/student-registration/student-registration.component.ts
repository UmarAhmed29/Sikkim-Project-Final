import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../provider/auth.service';
// indexeddb imports
import { StudentService } from '../../../provider/IndexedDb/student/student.service';
import { Student, IStudent } from '../../../provider/model/student';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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
            email: ['', [Validators.required]],
            cls: ['', [Validators.required]],
            section: ['', [Validators.required]],
            adm_id: ['',[Validators.required]],
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

    // IndexedDb functions
    async addStudentIDB() {
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
}
