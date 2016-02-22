/**
 * Test case for set.
 * Runs with nodeunit.
 */
"use strict";

const set = require('../lib/set.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Set by key and val'] = function (test) {
    set("test.quz", "quzzz", {
        location: 'local'
    }, (err) => {
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
    }, (err) => {
        test.ifError(err);
        test.done();
    });
};

