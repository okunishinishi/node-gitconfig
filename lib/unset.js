/**
 * Unset git config values.
 * @function unset
 * @param {string} key - Keys to unset.
 * @param {object} [options] - Optional settings.
 * @param {object} function - Callback when done.
 */

"use strict";

const argx = require('argx'),
    async = require('async'),
    arrayreduce = require('arrayreduce'),
    execcli = require('execcli');

/** @lends unset */
function unset(keys, options, callback) {
    let args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    keys = [].concat(args.shift('string|array') || []);
    options = args.pop('object') || {};
    keys = keys.concat(args.remain()).reduce(arrayreduce.arrayConcat(), []);
    async.eachSeries(keys, (key, callback) => {
        let cmdArgs = ['config'];
        cmdArgs.push('--unset');
        if (options.location) {
            cmdArgs.push('--' + options.location);
        }
        cmdArgs.push(key);
        execcli('git', cmdArgs, callback);
    }, callback);
}

module.exports = unset;
