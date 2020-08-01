export class IStudent {
    id?: number;
    studentName: string;
    fatherName: string;
    gender: string;
    dob: string;
    rollnum: string;
    blood_grp: string;
    religion: string;
    email: string;
    cls: string;
    section: string;
    adm_id: string;
    schoolID: string;
    phone: string;
    address: string;
    timeStamp: string;
}

export class Student implements IStudent {
    id?= null;
    studentName = '';
    fatherName = '';
    gender = '';
    dob = '';
    rollnum = '';
    blood_grp = '';
    religion = '';
    email = '';
    cls = '';
    section = '';
    adm_id = '';
    schoolID = '';
    phone = '';
    address = '';
    timeStamp = '';
}
