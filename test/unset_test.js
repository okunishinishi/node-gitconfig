/**
 * Test case for unset.
 * Runs with nodeunit.
 */

var unset = require('../lib/unset.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Unset config'] = function (test) {
    unset({
            test: ['foo','baz']
        }
        , function (err) {
        test.ifError(err);
        test.done();
    });
};

