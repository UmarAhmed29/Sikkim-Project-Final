var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var attendanceSchema = new Schema({
    studentName: { type: String },
    attendanceDate: { type: String },
    attendance: { type: String },
    rollnum: { type: String },
    cls: { type: String },
    section: { type: String },
    schoolID: { type: String },
}, { collection: 'Student-Attendance' });
var StudentAttendance = module.exports= mongoose.model('StudentAttendance', attendanceSchema);