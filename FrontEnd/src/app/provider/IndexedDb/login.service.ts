import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ILogin } from '../model/login';

// @Injectable({
//   providedIn: 'root'
// })
export class LoginService extends BaseService {

    tableName = 'Login-Details';

    getStudentByClass(email: string, password: string) {
        return this.connection.select<ILogin>({
            from: this.tableName,
            where: {
                email: email,
                password: password
            }
        });
    }

}
