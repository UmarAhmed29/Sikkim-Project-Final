import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IStudentAttendance } from '../model/studentAttendance';

// @Injectable({
//   providedIn: 'root'
// })
export class StudentAttendanceService extends BaseService {

    tableName = 'Student-Attendance';

    addStudentAttendance(student: IStudentAttendance) {
        return this.connection.insert<IStudentAttendance>({
            into: this.tableName,
            return: true, // as id is autoincrement, so we would like to get the inserted value
            values: [student]
        });
    }

    getStudentAttendanceByClass(cls: string, section: string, date: string) {
        return this.connection.select<IStudentAttendance>({
            from: this.tableName,
            where: {
                cls: cls,
                section: section,
                attendanceDate: date
            }
        });
    }

}
