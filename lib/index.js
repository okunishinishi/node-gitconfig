/**
 * Run git config command
 * @module gitconfig
 */

'use strict'

const _d = (module) => module && module.default || module

const fetchRepo = _d(require('./fetch_repo'))
const get = _d(require('./get'))
const set = _d(require('./set'))
const unset = _d(require('./unset'))

module.exports = {
  fetchRepo,
  get,
  set,
  unset
}
