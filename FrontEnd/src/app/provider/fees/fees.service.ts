import { Injectable } from '@angular/core';
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
export class FeesService {
  constructor(private http: Http,
    public router: Router) {
  }
  feesSubmit(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/feesSubmit', data, options)
      .map(res => {
        console.log(res.json())
        return res.json()
      })
      .catch((err) => {
        console.log(err.json)
        return err.json()
      })
  }
  feesRecord(data) {
    console.log(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/feesRecord', data, options)
      .map(res =>res.json()).catch((err) =>err.json())
  }
}
