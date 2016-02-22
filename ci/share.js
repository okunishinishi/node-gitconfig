#!/usr/bin/env node

/**
 * Share this project.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    sharegit = require('../lib');

apeTasking.runTasks('share', [
    function (callback) {
        sharegit(callback);
    }
], true);
