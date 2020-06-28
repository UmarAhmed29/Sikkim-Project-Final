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
    selector: 'app-school-registration',
    templateUrl: './school-registration.component.html',
    styleUrls: ['./school-registration.component.scss'],
    animations: [routerTransition()]
})
export class SchoolRegistrationComponent implements OnInit {
       RegistrationForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private authService: AuthService ) {
        this.createForm();
        // this.router.navigate(['dashboard']);
    }
    createForm() {
        this.RegistrationForm = this.fb.group({
            schoolName: ['', [Validators.required]],
            ownerName: ['', [Validators.required]],
            ownerCNIC: ['', [Validators.required]],
            registrationDate: ['', [Validators.required]],
            amount: ['', [Validators.required]],
            location: ['', [Validators.required]],
            schoolID: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', Validators.required]
        })
    }
    ngOnInit() {
    }
    addSchool(){
             console.log(this.RegistrationForm.value);
        this.authService.registrationSchool(this.RegistrationForm.value)
        .map(
       data=>{console.log(data); return data },
       err =>{console.log(err); return err}
       ).subscribe(
           data=>{
          alert("Registeration Successfully");
          this.router.navigate(['view-school']);
        },
           err=>{alert("Something Went Wrong");console.log(err)}
        );
        // this.router.navigate(['dashboard'])
        // localStorage.setItem('isLoggedin', 'true');
    }
}
