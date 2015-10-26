/**
 * Run git config command
 * @module gitconfig
 */

"use strict";

module.exports = {
    get get() { return require('./get'); },
    get set() { return require('./set'); },
    get unset() { return require('./unset'); }
};