import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    pushRightClass: string = 'push-right';
    navName;
    userType;
    type;
    userData;
    // private translate: TranslateService,
    constructor( public router: Router) {
        var data = localStorage.getItem('currentUser')
        console.log(JSON.parse(data));
        var dataParse = JSON.parse(data)
        this.userData=dataParse;
        this.type = dataParse.type
        if(this.type=="superAdmin"){
            this.navName="STATE LOGIN";
            this.userType="Super Admin"
        }
        else if(this.type=="admin"){
            this.navName=dataParse.schoolName;
            this.userType="Admin"
        }
        else if(this.type=="employee"){
            this.navName=dataParse.employeeName;
            this.userType="Employee"
        }
        else if(this.type=="student"){
            this.navName=dataParse.studentName;
            this.userType="Student"
        }
    }

    ngOnInit() { }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentUser');
    }

    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
}
