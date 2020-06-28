var mongoose = require('mongoose');

//Create School Registration Schema using mongoose
var schoolRegisterSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String,unique: false },
    schoolName: { type: String,unique: false },
    registrationDate: { type: String,unique: false },
    amount: { type: String,unique: false },
    location: { type: String,unique: false },
    type: { type: String,unique: false },
    schoolID: { type: String,unique: false },
    ownerName: { type: String,unique: false },
    ownerCNIC: { type: String,unique: false }
}, { collection: 'school-register' });
var SchoolRegister =module.exports= mongoose.model('SchoolRegister', schoolRegisterSchema);