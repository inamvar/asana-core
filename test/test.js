var assert = require('assert');
var User = require('../models/user');
var mongoose = require('mongoose');
var config = require('../config');
var core = require('../index');
describe('Start', function () {
    it('should be started without any exception', function () {
        core.start();
    });
});

/*
describe('database', function () {
    before(function (done) {
        mongoose.connect(config.db.url, done);
    });
    describe('User', function () {
        describe('#save()', function () {
            it('should save without error', function (done) {
                var user = new User();
                user.firstName = "Iman";
                user.lastName = "Namvar";
                user.email = "iman.namvar@gmail.com";
                user.gender = 'M';
                user.birthday = Date.parse('1983-10-11');
                user.age = 33;
                user.identityCode = '2219185885';
                user.mobile = '+989124187386';
                user.save(done);
            });
        });
    });
});
*/



