import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../provider/auth.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-student-registration',
    templateUrl: './student-registration.component.html',
    styleUrls: ['./student-registration.component.scss'],
    animations: [routerTransition()]
})
export class StudentRegistrationComponent implements OnInit {
    RegistrationForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService) {
        this.createForm();
        // this.router.navigate(['dashboard']);
    }
    createForm() {
        this.RegistrationForm = this.fb.group({
            studentName: ['', [Validators.required]],
            fatherName: ['', [Validators.required]],
            registrationDate: ['', [Validators.required]],
            class: ['', [Validators.required]],
            QRno: ['', [Validators.required]],
            studentFees: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', Validators.required]
        })
    }
    ngOnInit() {
    }
    addStudent() {
        console.log(this.RegistrationForm.value);
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.RegistrationForm.value["schoolID"]=schoolDetailParse._id;
        // console.log(this.RegistrationForm.value);
            this.authService.registrationStudent(this.RegistrationForm.value)
            .map(
           data=>{console.log(data); return data },
           err =>{console.log(err); return err}
           ).subscribe(
               data=>{
              alert("Registeration Successfully");
            },
               err=>{alert("Email & Password Invalid");console.log(err)}
            );
            this.router.navigate(['students-detail'])
            localStorage.setItem('isLoggedin', 'true');
    }
}
