import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ITeacher } from '../model/teacher';

// @Injectable({
//   providedIn: 'root'
// })
export class TeacherService extends BaseService {

    tableName = 'Teachers';

    getTeachers() {
        return this.connection.select<ITeacher>({
            from: this.tableName,
        });
    }

    addTeacher(teacher: ITeacher) {
        return this.connection.insert<ITeacher>({
            into: this.tableName,
            return: true, // as id is autoincrement, so we would like to get the inserted value
            values: [teacher],
        });
    }

    deleteTeacher(teacherId: number) {
        return this.connection.remove({
            from: this.tableName,
            where: {
                id: teacherId,
            },
        });
    }

    updateTeacher(teacherId: number, updateValue: ITeacher) {
        return this.connection.update({
            in: this.tableName,
            where: {
                id: teacherId,
            },
            set: updateValue,
        });
    }

    getTeacherById(teacherId: number) {
        return this.connection.select<ITeacher>({
            from: this.tableName,
            where: {
                id: teacherId,
            },
        });
    }

    async clearTeachers() {
        return await this.connection.clear(this.tableName);
    }

}
