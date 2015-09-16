/**
 * Set git config values.
 * @function set
 * @param {string} key - Key to set.
 * @param {string} val - Value to set.
 * @param {object} [options] - Optional settings.
 * @param {object} function - Callback when done.
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    execcli = require('execcli'),
    objnest = require('objnest');

/** @lends set */
function set(key, val, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    var setting = args.shift('object') || {};
    key = args.shift('string');
    val = args.shift('string');
    if (key) {
        setting[key] = val;
    }
    setting = objnest.flatten(setting);
    options = args.pop('object');
    async.eachSeries(Object.keys(setting), function (key, callback) {
        var cmdArgs = ['config'];
        if (options.location) {
            cmdArgs.push('--' + options.location);
        }
        cmdArgs.push(key);
        cmdArgs.push(setting[key]);
        execcli('git', cmdArgs, callback);
    }, callback);
}

module.exports = set;
