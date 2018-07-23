/**
 * Run git config command
 * @module gitconfig
 */

'use strict'

const d = (module) => module && module.default || module

const fetchRepo = d(require('./fetch_repo'))
const get = d(require('./get'))
const set = d(require('./set'))
const unset = d(require('./unset'))

module.exports = {
  fetchRepo,
  get,
  set,
  unset
}
