import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ITeacherAttendance } from '../model/teacherAttendance';

// @Injectable({
//   providedIn: 'root'
// })
export class TeacherAttendanceService extends BaseService {

    tableName = 'Teacher-Attendance';

    addTeacherAttendance(teacher: ITeacherAttendance) {
        return this.connection.insert<ITeacherAttendance>({
            into: this.tableName,
            return: true, // as id is autoincrement, so we would like to get the inserted value
            values: [teacher]
        });
    }

    getTeacherAttendance(date: string) {
        return this.connection.select<ITeacherAttendance>({
            from: this.tableName,
            where: {
                attendanceDate: date
            }
        });
    }

}
