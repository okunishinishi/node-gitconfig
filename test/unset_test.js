/**
 * Test case for unset.
 * Runs with nodeunit.
 */

var set = require('../lib/set.js'),
    unset = require('../lib/unset.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Unset config'] = function (test) {
    set('test.foo', 'bar', function (err) {
        test.ifError(err);
        unset('test.foo', function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

exports['Unset config with array.'] = function (test) {
    set('test.baz', 'bar', function (err) {
        test.ifError(err);
        unset(['test.baz'], function (err) {
            test.ifError(err);
            test.done();
        });
    });
};

