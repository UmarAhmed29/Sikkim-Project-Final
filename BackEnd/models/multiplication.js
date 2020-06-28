var mongoose = require('mongoose');

//Create Multication Schema using mongoose
var Schema = mongoose.Schema;
var multiplicationSchema = new Schema({
    num1: { type: Number },
    num2: { type: Number },
}, { collection: 'multiplication' });
var Multiplication =module.exports= mongoose.model('Multiplication', multiplicationSchema);