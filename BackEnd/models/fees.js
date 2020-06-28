var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var feesSchema = new Schema({
    email: { type: String },
    studentName: { type: String },
    fatherName: { type: String },
    submitionDate: { type: String },
    QRno: { type: String },
    class: { type: String },
    schoolID: { type: String },
    studentFees: { type: String },
    month: { type: String },
    year: { type: String },
}, { collection: 'fees' });
var Fees =module.exports= mongoose.model('Fees', feesSchema);