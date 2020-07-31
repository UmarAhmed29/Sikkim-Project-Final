export class ITeacherAttendance {
    id?: number;
    teacherName: string;
    reg_num: string;
    attendanceDate: string;
    attendance: string;
    schoolID: string;
    subject: string;
}

export class Teacher implements ITeacherAttendance {
    id?= null;
    teacherName = '';
    reg_num = '';
    subject = '';
    attendance = '';
    attendanceDate = '';
    schoolID = '';
}
