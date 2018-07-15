 /**
 * Get git url of current project.
 * @function getRepoUrl
 * @returns {String}
 */
const get = require('./get');
const lget = require('lodash.get');
function getRepoUrl () {
    return lget(get.sync(),'remote.origin.url');
}

module.exports = getRepoUrl;