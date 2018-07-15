const GitUrlParse = require("git-url-parse");
const get = require('./get');
const lget = require('lodash.get');
function getRepoUrl () {
    return  url || lget(get.sync(),'remote.origin.url');
}

module.exports = getRepoUrl;