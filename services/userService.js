var User = require('../models/user');

module.exports.save = function(model, done){
    var user = new User();
    user.firstName = model.firstName;
    user.save(done);
};

module.exports.getAll = function(done){
    User.find(done);
}