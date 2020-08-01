export class ITeacher {
    id?: number;
    teacherName: string;
    fatherName: string;
    gender: string;
    dob: string;
    religion: string;
    blood_grp: string;
    phone: string;
    email: string;
    reg_num: string;
    qualification: string;
    exp: string;
    subject: string;
    address: string;
    schoolID: string;
    timeStamp: string;
}

export class Teacher implements ITeacher {
    id?= null;
    teacherName = '';
    fatherName = '';
    gender = '';
    dob = '';
    religion = '';
    blood_grp = '';
    phone = '';
    email = '';
    reg_num = '';
    qualification = '';
    exp = '';
    subject = '';
    address = '';
    schoolID = '';
    timeStamp = '';
}
