export class IStudentAttendance {
    id?: number;
    studentName: string;
    rollnum: string;
    cls: string;
    section: string;
    attendanceDate: string;
    attendance: string;
    schoolID: string;
}

export class Student implements IStudentAttendance {
    id?= null;
    studentName = '';
    rollnum = '';
    cls = '';
    section = '';
    attendanceDate = '';
    attendance = '';
    schoolID = '';
}
