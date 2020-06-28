import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Http, HttpModule } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
// import * as firebase from 'firebase/app';
@Injectable()
export class ViewSchoolService {
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
  viewSchool() {
    return this.http.get('http://localhost:8000/api/viewSchool')
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  schoolDelete(id) {
    console.log(id)
    var data={
      id:id
    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/schoolDelete',data,options)
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
