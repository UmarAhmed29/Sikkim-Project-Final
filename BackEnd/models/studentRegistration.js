var mongoose = require('mongoose');

//Create School Registration Schema using mongoose
var studentRegisterSchema = mongoose.Schema({
    studentName: { type: String, unique: false },
    fatherName: { type: String, unique: false },
    gender: { type: String, unique: false },
    dob: { type: String, unique: false },
    rollnum: { type: String, unique: false },
    blood_grp: { type: String, unique: false },
    religion: { type: String, unique: false },
    email: { type: String, unique: true },
    cls: { type: String,unique: false },
    section: { type: String, unique: false},
    adm_id: { type: String, unique: true},
    schoolID: { type: String,unique: false },
    phone: { type: String, unique: true },
    address: { type: String, unique: false },
}, { collection: 'Students' });
var StudentRegister =module.exports= mongoose.model('StudentRegister', studentRegisterSchema);