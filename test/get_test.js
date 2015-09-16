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
        test.ok(config);
        get('user', function (err, config) {
            test.ifError(err);
            test.ok(config);
            test.done();
        });
    });
};


exports['Get config sync'] = function (test) {
    var all = get.sync();
    test.ok(all);
    var user = get.sync('user');
    test.ok(user);
    test.done();
};

