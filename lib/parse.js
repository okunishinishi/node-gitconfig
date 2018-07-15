const GitUrlParse = require("git-url-parse");
const get = require('./get');
const lget = require('lodash.get');
function getRepoUrl (url) {    
    const url2Parse = url || lget(get.sync(),'remote.origin.url');
    const parsedUrl = GitUrlParse(url2Parse);
    return `${parsedUrl.resource}${parsedUrl.pathname}`;
}

module.exports = getRepoUrl;