import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ViewSchoolService } from './../../../provider/viewSchool/viewSchool.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
    selector: 'app-view-school',
    templateUrl: './view-school.component.html',
    styleUrls: ['./view-school.component.scss'],
    animations: [routerTransition()]
})
export class ViewSchoolComponent implements OnInit {
    schoolsData;
    schoolslength;
    constructor(public fb: FormBuilder, public router: Router, private viewSchoolService: ViewSchoolService) {
        this.viewSchoolService.viewSchool()
            .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
            data => {
                this.schoolsData = data;
                this.schoolslength = data.length
                console.log(this.schoolslength);
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    delete(id) {
        console.log(id);
        this.viewSchoolService.schoolDelete(id)
            .map(
            data => { console.log(data); return data },
            err => { console.log(err); return err }
            ).subscribe(
            data => {
                // console.log(data);
                this.schoolsData = data;
                this.schoolslength = data.length
            },
            err => { alert("Something Went Wrong"); console.log(err) }
            );
    }
    ngOnInit() {

    }

}
