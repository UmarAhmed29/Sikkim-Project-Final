var mongoose = require('mongoose');

//Create School Registration Schema using mongoose
var studentRegisterSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String,unique: false },
    studentName: { type: String,unique: false },
    fatherName: { type: String,unique: false },
    registrationDate: { type: String,unique: false },
    type: { type: String,unique: false },
    class: { type: String,unique: false },
    schoolID: { type: String,unique: false },
    QRno: { type: String,unique: false },
    studentFees: { type: String,unique: false },
}, { collection: 'student-register' });
var StudentRegister =module.exports= mongoose.model('StudentRegister', studentRegisterSchema);