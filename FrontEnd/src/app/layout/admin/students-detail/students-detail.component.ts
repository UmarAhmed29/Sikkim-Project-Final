import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { StudentDetailService } from './../../../provider/studentDetail/studentDetail.service';
// indexeddb imports
import { StudentService } from '../../../provider/IndexedDb/student.service';
import { Student, IStudent } from '../../../provider/model/student';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-students-detail',
    templateUrl: './students-detail.component.html',
    styleUrls: ['./students-detail.component.css'],
    providers: [StudentService],
})
export class StudentsDetailComponent implements OnInit {
    S_cls;
    S_section;
    studentsList = [];
    searchData = false;
    // indexeddb part start
    private service: StudentService;
    students: Array<IStudent> = [];
    newStudent: IStudent = new Student();
    oldStudent: IStudent = new Student();
    // indexeddb part end
    studentData;
    studentlength;
    schoolID;
    isSubmit = false;
    public myForm: FormGroup;
    constructor(public fb: FormBuilder, public router: Router, private studentDetailService: StudentDetailService, service: StudentService) {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.service = service;
        this.schoolID = schoolDetailParse._id;
    }
        ngOnInit() {
        this.myForm = this.fb.group({
            cls: [null, Validators.required],
            section: [null, Validators.required],
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
            err => { alert('Something Went Wrong'); console.log(err) }
            );
    }
    getData(id) {
        this.studentDetailService.studentDetail({ schoolID: id })
            .subscribe(
            data => {
                this.studentData = data;
                this.studentlength = data.length
            },
            err => { alert('Something Went Wrong'); console.log(err) }
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
            err => { alert('Something Went Wrong'); console.log(err) }
            );
    }

    //   search specific students from class, section
    async search() {
        this.S_cls = this.myForm.value.cls;
        this.S_section = this.myForm.value.section;
        try {
            this.studentsList = await this.service.getStudentByClass(this.S_cls, this.S_section);
            if (this.studentsList.length > 0) {
                this.searchData = true;
            } else {
                alert('No data found!');
                return;
            }
        } catch (error) {
            // console.error(error);
            // alert(error.message);
            alert('Please select Class and Section');
        }
    }
}
