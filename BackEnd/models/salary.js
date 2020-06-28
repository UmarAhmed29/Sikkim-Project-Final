var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var salarySchema = new Schema({
    employeeID: { type: String },
    email: { type: String },
    employeeName: { type: String },
    submitionDate: { type: String },
    employeeType: { type: String },
    schoolID: { type: String },
    salary: { type: String },
    month: { type: String },
    year: { type: String },
}, { collection: 'salary' });
var Salary =module.exports= mongoose.model('Salary', salarySchema);