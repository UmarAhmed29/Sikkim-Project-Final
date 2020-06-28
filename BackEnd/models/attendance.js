var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var attendanceSchema = new Schema({
    email: { type: String },
    attendanceDate: { type: String },
    attendance: { type: String },
    employeeID: { type: String },
    employeeName: { type: String },
    employeeType: { type: String },
    schoolID: { type: String },
    month: { type: String },
    year: { type: String },
}, { collection: 'attendance' });
var Attendance =module.exports= mongoose.model('Attendance', attendanceSchema);