var mongoose = require('mongoose');

var UnitSchema = mongoose.Schema({
    name: {type:String, require:true},
    description: String
});


module.exports = mongoose.model('Unit', UnitSchema);