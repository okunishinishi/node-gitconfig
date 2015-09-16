/**
 * Run git config command
 * @module gitconifg
 */

"use strict";

module.exports = {
    get get() { return require('./get'); },
    get set() { return require('./set'); }
};