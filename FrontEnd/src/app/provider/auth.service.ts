import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
// import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {
  authState;
  checkUserType;
  constructor(private http: Http,
    public router: Router) {

    // this.afAuth.authState.subscribe((auth) => {
    //   this.authState = auth;
    //   console.log(this.authState);
    //   console.log("Auth Changes");

    // })
  }
  logout() {
    console.log("signout");
    // this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  logIn(loginForm) {
    console.log(loginForm)
    var dataJSON = JSON.stringify(loginForm)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/login', loginForm, options)
    // return this.http.post('http://18.204.202.235:8000/api/login', loginForm, options)
      .map(res => {
        console.log(res.json())
        // if (res.json().type === "superAdmin") {
        //   this.checkUserType = res.json().type;
        //   console.log(res.json().type);
        // }
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }


  registrationSchool(RegistrationForm) {
    console.log(RegistrationForm)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/schoolRegistration', RegistrationForm, options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  registrationStudent(RegistrationForm) {
    console.log(RegistrationForm)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/studentRegistration', RegistrationForm, options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  registrationEmployee(RegistrationForm) {
    console.log(RegistrationForm)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/employeeRegistration', RegistrationForm, options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }

}
