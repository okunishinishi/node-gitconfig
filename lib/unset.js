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
    keys = args.shift('object');
    keys = objnest.flatten(keys);
    options = args.pop('object');
    async.eachSeries(Object.keys(keys), function (key, callback) {
        var cmdArgs = ['config'];
        cmdArgs.push('--unset');
        if (options.location) {
            cmdArgs.push('--' + options.location);
        }
        cmdArgs.push(key);
        cmdArgs.push(setting[key]);
        execcli('git', cmdArgs, callback);
    }, callback);
}

module.exports = unset;
