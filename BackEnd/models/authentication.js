var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var authenticationSchema = new Schema({
    email: { type: String, unique: true },
    type: { type: String },
    password: { type: String }
}, { collection: 'authentication' });
var Authentication =module.exports= mongoose.model('Authentication', authenticationSchema);