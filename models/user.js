var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    midlleName: String,
    identityCode: String,
    image: { data: Buffer, contentType: String },
    age: Number,
    gender: ['M', 'F'],
    email: {type: String, unique:true},
    local: { username: {type:String, unique:true}, password: String },
    phone: String,
    fax: String,
    mobile: String,
    address: String,
    city: String,
    province: String,
    zipcode: String,
    birthday: Date,
    website: String,
    facebook: { id: String, token: String, email: String, name: String },
    twitter: { id: String, token: String, displayName: String, username: String },
    google: { id: String, token: String, email: String, name: String },
    instagram: { id: String, token: String, displayName: String, username: String },
    role: { type: String, enum: ['client','cashier', 'manager', 'admin'], default: 'client' },
    created: { type: Date, default: Date.now() },
    updated: { type: Date, default: Date.now() },
    credit: { type: Number, default: 0 },
    point: { type: Number, default: 0 },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

module.exports = mongoose.model('User', UserSchema);