import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';
import { environment } from '../../../environments/environment';
declare var require: any;

const getWorkerPath = () => {
    if (environment.production) {
        return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js');
    } else {
        return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js');
    }
};

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
export const idbCon = new JsStore.Connection(new Worker(getWorkerPath().default));
export const dbname = 'School Database';


const getDatabase = () => {
    // Login details table in IndexedDB
    const tblLoginDetails: ITable = {
        name: 'Login-Details',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            password: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            schoolID: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            schoolName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            city: {
                notNull: true,
                dataType: DATA_TYPE.String,
            }
        },
    };

    // Students table in IndexedDB
    const tblStudent: ITable = {
        name: 'Students',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true,
            },
            studentName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            fatherName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            lastName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            gender: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            dob: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            rollnum: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            blood_grp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            religion: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            email: {
                notNull: false,
                dataType: DATA_TYPE.String,
            },
            cls: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            section: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            // adm_id: {
            //     notNull: true,
            //     dataType: DATA_TYPE.String,
            // },
            schoolID: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            phone: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            address: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            timeStamp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            }
        },
    };

    // Teachers table in IndexedDB
    const tblTeacher: ITable = {
        name: 'Teachers',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true,
            },
            teacherName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            fatherName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            gender: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            dob: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            religion: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            blood_grp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            phone: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            email: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            reg_num: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            qualification: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            exp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            subject: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            address: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            timeStamp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            }
        },
    };

    // Student-Attendance table in IndexedDB
    const tblStudentAttendance: ITable = {
        name: 'Student-Attendance',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true,
            },
            attendanceDate: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            attendance: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            studentName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            rollnum: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            schoolID: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            cls: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            section: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            timeStamp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            }
        },
    };

    // Teacher-Attendance table in IndexedDB
    const tblTeacherAttendance: ITable = {
        name: 'Teacher-Attendance',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true,
            },
            attendanceDate: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            attendance: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            teacherName: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            reg_num: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            subject: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            schoolID: {
                notNull: true,
                dataType: DATA_TYPE.String,
            },
            timeStamp: {
                notNull: true,
                dataType: DATA_TYPE.String,
            }
        },
    };

    const dataBase: IDataBase = {
        name: dbname,
        tables: [tblLoginDetails, tblStudent, tblTeacher, tblStudentAttendance, tblTeacherAttendance]
    };
    return dataBase;
};

function getAvailableStudents() {
    const availableStudents: Student[] = [{
        studentName: 'Peter',
        fatherName: 'John',
        lastName: 'Parker',
        gender: 'Male',
        dob: '12/05/2000',
        rollnum: '36101',
        blood_grp: 'O+',
        religion: 'Christian',
        email: 'peter@gmail.com',
        cls: '10th',
        section: 'B',
        schoolID: '5ef6dbd30f05bf3dd8e26239',
        phone: '9876543210',
        address: 'USA',
        timeStamp: '2018-8-3 11:12:40'
    }];
    return availableStudents;
}

export const initJsStore = async () => {
    const dataBase = getDatabase();
    const isDbCreated = await idbCon.initDb(dataBase);
    if (isDbCreated) {
        idbCon.insert({
            into: 'Students',
            values: getAvailableStudents(),
        });
    }
};

