/**
 * Unset git config values.
 * @function unset
 * @param {string} key - Keys to unset.
 * @param {object} [options] - Optional settings.
 * @param {object} function - Callback when done.
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    execcli = require('execcli'),
    objnest = require('objnest');

/** @lends unset */
function unset(keys, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};
    keys = args.remain();
    async.eachSeries(keys, function (key, callback) {
        var cmdArgs = ['config'];
        cmdArgs.push('--unset');
        if (options.location) {
            cmdArgs.push('--' + options.location);
        }
        cmdArgs.push(key);
        execcli('git', cmdArgs, callback);
    }, callback);
}

module.exports = unset;
