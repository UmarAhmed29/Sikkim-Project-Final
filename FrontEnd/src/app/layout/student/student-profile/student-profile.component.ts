import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
    schoolID;email;QRno;class;fatherName;registrationDate;studentFees;studentName;
    constructor() {
        var schoolDetail = localStorage.getItem('currentUser');
        var schoolDetailParse = JSON.parse(schoolDetail);
        this.studentName = schoolDetailParse.studentName;
        this.schoolID = schoolDetailParse.schoolID;
        this.email = schoolDetailParse.email;
        this.QRno = schoolDetailParse.QRno;
        this.class = schoolDetailParse.class;
        this.fatherName = schoolDetailParse.fatherName;
        this.registrationDate = schoolDetailParse.registrationDate;
    }

    ngOnInit() {
    }
}
