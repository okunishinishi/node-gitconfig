/**
 * Test case for getConfig.
 * Runs with nodeunit.
 */

var getConfig = require('../lib/get_config.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Get config'] = function (test) {
    getConfig(function (err, config) {
        test.ifError(err);
        test.ok(config);
        getConfig('user', function (err, config) {
            test.ifError(err);
            test.ok(config);
            test.done();
        });
    });
};

