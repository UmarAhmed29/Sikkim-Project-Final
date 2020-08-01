var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var attendanceSchema = new Schema({
    teacherName: { type: String },
    reg_num: { type: String },
    attendance: { type: String },
    attendanceDate: { type: String },
    subject: { type: String },
}, { collection: 'Teacher-Attendance' });
var TeacherAttendance = module.exports = mongoose.model('TeacherAttendance', attendanceSchema);