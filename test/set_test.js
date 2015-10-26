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

exports['Set by key and val'] = function (test) {
    set("test.quz", "quzzz", {
        location: 'local'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};


exports['Set by object'] = function (test) {
    set({
        test: {
            foo2: 'bar',
            baz2: 'quz'
        }
    }, {
        location: 'local'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

