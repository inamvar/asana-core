var mongoose = require('mongoose');

var TaxSchema = mongoose.Schema({
    name: String,
    rate: Number,
    type: [{type:String, values:['tax','discount']}]
});
module.exports = mongoose.model('Tax', TaxSchema);