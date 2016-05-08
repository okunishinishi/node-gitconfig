#!/usr/bin/env node

/**
 * Measure test coverage.
 */

"use strict";

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

apeTasking.runTasks('cover', [
  () => apeCovering.measureCoverage('ci/test.js', [], {
    dir: 'coverage'
  })
], true)
