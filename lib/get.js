/**
 * Get git config values.
 * @function get
 * @param {string} [namespace] - Namespace to get.
 * @param {object} options - Optional settings.
 * @param {string} [options.location] - Config file location. (global, system, or local)
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    childProcess = require('child_process'),
    os = require('os'),
    objnest = require('objnest');

/** @lends get */
function get(namespace, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};
    namespace = args.shift('string') || null;
    async.waterfall([
        function (callback) {
            var cmd = 'git config --list';
            if (options.location) {
                cmd += ('--' + options.location);
            }
            childProcess.exec(cmd, callback);
        },
        function (stdout, stderr, callback) {
            if (stderr) {
                callback(new Error(stderr));
                return;
            }
            var config = {};
            String(stdout).split(os.EOL).forEach(function (line) {
                if (!line) {
                    return;
                }
                var keyVal = line.split('=');
                var key = keyVal.shift(),
                    val = keyVal.pop();
                if (val === undefined) {
                    return;
                }
                config[key] = val;
            });
            callback(null, objnest.expand(config));
        },
        function (config, callback) {
            if (namespace) {
                config = config[namespace];
            }
            callback(null, config);
        }
    ], callback);
}

module.exports = get;
