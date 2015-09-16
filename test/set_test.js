/**
 * Test case for set.
 * Runs with nodeunit.
 */

var set = require('../lib/set.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Set config'] = function (test) {
    set({
        test: {
            foo: 'bar',
            baz: 'quz'
        }
    }, {
        location: 'local'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

