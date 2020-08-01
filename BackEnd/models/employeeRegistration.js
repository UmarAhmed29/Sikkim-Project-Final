var mongoose = require('mongoose');

//Create School Registration Schema using mongoose
var employeeRegisterSchema = mongoose.Schema({
    teacherName: { type: String, unique: false },
    fatherName: { type: String, unique: false },
    gender: { type: String, unique: false },
    dob: { type: String, unique: false },
    religion: { type: String, unique: false },
    blood_grp: { type: String, unique: false },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    type: { type: String, unique: false },
    reg_num: { type: String, unique: false },
    qualification: { type: String, unique: false },
    exp: { type: String, unique: false},
    subject: { type: String, unique: false},
    schoolID: { type: String, unique: false },
    address: { type: String, unique: false },
}, { collection: 'Teachers' });
var EmployeeRegister =module.exports= mongoose.model('EmployeeRegister', employeeRegisterSchema);