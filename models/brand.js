var mongoose = require('mongoose');

var BrandSchema = mongoose.Schema({
    name: {type:String, require:true},
    description: String,
    logo : Buffer,
    rate: Number
});


module.exports = mongoose.model('Brand', BrandSchema);