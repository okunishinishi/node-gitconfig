/**
 * Test case for get.
 * Runs with nodeunit.
 */

var get = require('../lib/get.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Get config'] = function (test) {
    get(function (err, config) {
        test.ifError(err);
        get('user', function (err, config) {
            test.ifError(err);
            test.done();
        });
    });
};


exports['Get config sync'] = function (test) {
    test.doesNotThrow(function () {
        get.sync();
        get.sync('user');
    });
    test.done();
};

