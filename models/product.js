var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: {type:String, require:true},
    description: String,
    colors : [String],
    salePrice : Number,
    purchasePrice : Number,
    images : [Buffer],
    brand : { type: Schema.Types.ObjectId, ref : 'Brand'},
    meta : Schema.Types.Mixed,
    category : {type: Schema.Types.ObjectId , ref:'ProductCategory'},
    createdAt : {type: Date, default: Date.now()},
    updatedAt : {type: Date, default: Date.now()},
    tax: { type :Schema.Types.ObjectId, ref: 'Tax'},
    barcode: String,
    loyaltyPoint: Number,
    minQuantity: Number,
    quantityTrack: Boolean,
    quantity: Number

});


module.exports = mongoose.model('Product', ProductSchema);