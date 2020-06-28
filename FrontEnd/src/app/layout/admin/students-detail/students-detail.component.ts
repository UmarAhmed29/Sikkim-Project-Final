import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { StudentDetailService } from './../../../provider/studentDetail/studentDetail.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-students-detail',
    templateUrl: './students-detail.component.html',
    styleUrls: ['./students-detail.component.scss']
})
export class StudentsDetailComponent implements OnInit {
    studentData;
    studentlength;
    schoolID;
    public myForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private studentDetailService: StudentDetailService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.schoolID = schoolDetailParse._id;
        this.getData(this.schoolID);
    }
        ngOnInit() {
        this.myForm = this.fb.group({
            class: [null, Validators.required]
            // other controls are here...
        });
    }
    submit() {
        var data = {
            schoolID:this.schoolID,
            class: this.myForm.value.class
        }
        console.log(data)
        this.studentDetailService.studentDetail(data)
            .subscribe(
            data => {
                console.log(data);
                this.studentData = data;
                this.studentlength = data.length
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    getData(id) {
        this.studentDetailService.studentDetail({ schoolID:id })
            .subscribe(
            data => {
                this.studentData = data;
                this.studentlength = data.length
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    delete(id) {
        console.log(id);
        this.studentDetailService.studentDelete(id)
            .subscribe(
            data => {
                this.getData(this.schoolID);
                // console.log(data);
                // this.studentData = data;
                // this.studentlength = data.length
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
}
