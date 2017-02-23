var mongoose = require('mongoose');

var ProductCategorySchema = mongoose.Schema({
    name: String,
    description: String,
    parent : {type:Schema.Types.ObjectId, ref: 'ProductCategory'}
});
module.exports = mongoose.model('ProductCategory', ProductCategorySchema);