import * as JsStore from 'jsstore';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';
import { Student } from '../../model/student';
import { environment } from '../../../../environments/environment';
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
export const idbCon = new JsStore.Connection(new Worker(getWorkerPath()));
export const dbname = 'School Database';


const getDatabase = () => {
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
            adm_id: {
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
        },
    };
    const dataBase: IDataBase = {
        name: dbname,
        tables: [tblStudent]
    };
    return dataBase;
};

function getAvailableStudents() {
    const availableStudents: Student[] = [{
        studentName: 'Peter',
        fatherName: 'John',
        gender: 'Male',
        dob: '12/05/2000',
        rollnum: '36101',
        blood_grp: 'O+',
        religion: 'Christian',
        email: 'peter@gmail.com',
        cls: '10',
        section: 'B',
        adm_id: '2021001',
        phone: '9876543210',
        address: 'USA'
    }];
    return availableStudents;
}

export const initJsStore = async () => {
    const dataBase = getDatabase();
    const isDbCreated = await idbCon.initDb(dataBase);
    if (isDbCreated) {
        idbCon.insert({
            into: 'Students',
            values: getAvailableStudents()
        })
    }
};


