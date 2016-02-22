/**
 * Test case for get.
 * Runs with nodeunit.
 */
"use strict";

const get = require('../lib/get.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Get config'] = function (test) {
    get(function (err, config) {
        test.ifError(err);
        get('user',  (err, config) => {
            test.ifError(err);
            test.done();
        });
    });
};


exports['Get config sync'] = function (test) {
    test.doesNotThrow(() => {
        get.sync();
        get.sync('user');
    });
    test.done();
};

