/**
 * Test case for get.
 * Runs with mocha.
 */
'use strict'

const get = require('../lib/get.js')
const co = require('co')
const assert = require('assert')

describe('get', function () {
  it('Get config', () => co(function * () {
    let config = yield get()
    assert.ok(config)
    let user = yield get('user')
    assert.ok(user)
  }))

  it('Get config sync', () => co(function * () {
    let config = get.sync()
    assert.ok(config)
    let user = get.sync('user')
    assert.ok(user)
  }))
})

/* global describe, it */
