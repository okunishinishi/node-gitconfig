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
            var cmd = _getCommand(options.location);
            childProcess.exec(cmd, callback);
        },
        function (stdout, stderr, callback) {
            if (stderr) {
                callback(new Error(stderr));
                return;
            }
            var config = _parseStdout(stdout, namespace);
            callback(null, config);
        }
    ], callback);
}

get.sync = function (namespace, options) {
    var args = argx(arguments);
    options = args.pop('object') || {};
    namespace = args.shift('string') || null;
    var cmd = _getCommand(options.location);
    var stdout = childProcess.execSync(cmd);
    return _parseStdout(stdout, namespace);
};


function _getCommand(location) {
    var cmd = 'git config --list';
    if (location) {
        cmd += (' --' + location);
    }
    return cmd;
}
function _parseStdout(stdout, namespace) {
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
    config = objnest.expand(config);
    if (namespace) {
        var namespaceSplit = namespace.split('.')
        if (namespaceSplit.length === 1) {
            config = config[namespace];
        } else {
            namespaceSplit.forEach(function (namespace) {
                config = config[namespace]
            })
        }
    }
    return config;
}

module.exports = get;
