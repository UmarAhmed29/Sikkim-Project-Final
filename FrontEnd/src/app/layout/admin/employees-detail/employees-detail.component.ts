import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetailService } from './../../../provider/employeeDetail/employeeDetail.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-employees-detail',
    templateUrl: './employees-detail.component.html',
    styleUrls: ['./employees-detail.component.scss']
})
export class EmployeesDetailComponent implements OnInit {
    employeeData;
    employeelength;
    schoolID;
    public myForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private employeeDetailService: EmployeeDetailService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse._id;
        this.getData(this.schoolID);
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            name: [null, Validators.required]
            // other controls are here...
        });
    }
    submit() {
        var data = {
            schoolID:this.schoolID,
            employeeName: this.myForm.value.name
        }
        console.log(data)
        this.employeeDetailService.employeeDetail(data)
            .subscribe(
            data => {
                console.log(data);
                this.employeeData = data;
                this.employeelength = data.length
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    getData(id) {
        this.employeeDetailService.employeeDetail({ schoolID: id })
            .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
            data => {
                this.employeeData = data;
                this.employeelength = data.length
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    delete(id) {
        console.log(id);
        this.employeeDetailService.employeeDelete(id)
            .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
            data => {
                // console.log(data);
                this.getData(this.schoolID);
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
}
