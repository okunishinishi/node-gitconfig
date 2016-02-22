/**
 * Test case for unset.
 * Runs with nodeunit.
 */
"use strict";

const set = require('../lib/set.js'),
    unset = require('../lib/unset.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Unset config'] = function (test) {
    set('test.foo', 'bar', (err) => {
        test.ifError(err);
        unset('test.foo', (err) => {
            test.ifError(err);
            test.done();
        });
    });
};

exports['Unset config with array.'] = function (test) {
    set('test.baz', 'bar', (err) => {
        test.ifError(err);
        unset(['test.baz'], (err) => {
            test.ifError(err);
            test.done();
        });
    });
};

