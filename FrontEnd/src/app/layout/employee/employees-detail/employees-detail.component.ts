import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetailService } from './../../../provider/employeeDetail/employeeDetail.service';
// indexeddb imports
import { TeacherService } from '../../../provider/IndexedDb/teacher.service';
import { Teacher, ITeacher } from '../../../provider/model/teacher';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-employees-detail',
    templateUrl: './employees-detail.component.html',
    styleUrls: ['./employees-detail.component.css'],
    providers: [TeacherService]
})
export class EmployeesDetailComponent implements OnInit {
    // indexeddb part start
    private service: TeacherService;
    teachers: Array<ITeacher> = [];
    newTeacher: ITeacher = new Teacher();
    oldTeacher: ITeacher = new Teacher();
    // indexeddb part end
    employeeData;
    employeelength;
    schoolID;
    public myForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private employeeDetailService: EmployeeDetailService, service: TeacherService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.service = service;
        this.schoolID = schoolDetailParse._id;
        // this.getData(this.schoolID);
        this.getTeachers();
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
            err => { alert('Something Went Wrong'); console.log(err) }
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
            err => { alert('Something Went Wrong'); console.log(err) }
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
            err => { alert('Something Went Wrong'); console.log(err) }
            );
    }

    // IndexedDb fetching student details function
    async getTeachers() {
        try {
            this.teachers = await this.service.getTeachers();

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
}
