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
    selector: 'app-employee-registration',
    templateUrl: './employee-registration.component.html',
    styleUrls: ['./employee-registration.component.scss'],
    animations: [routerTransition()]
})
export class EmployeeRegistrationComponent implements OnInit {
    RegistrationForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService) {
        this.createForm();
        // this.router.navigate(['dashboard']);
    }
    createForm() {
        this.RegistrationForm = this.fb.group({
            employeeName: ['', [Validators.required]],
            fatherName: ['', [Validators.required]],
            registrationDate: ['', [Validators.required]],
            employeeType: ['', [Validators.required]],
            employeeID: ['', [Validators.required]],
            salary: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', Validators.required]
        })
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
}
