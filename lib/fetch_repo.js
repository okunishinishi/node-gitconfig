const get = require('./get');
const lget = require('lodash.get');

 /**
 * Get remote url.
 * @param remoteName - remote name to fetch git url
 * @function getRepoRemoteUrl
 * @returns {String}
 */
function getRepoRemoteUrl (getGitInfo, remoteName) {
    return lget(getGitInfo, `remote.${remoteName}.url`);
}

 /**
 * Get all remote urls from current project
 * @function getAllRemotesUrls
 * @returns {Array<String>}
 */
function getAllRemotesUrls (getGitInfo) {
    const remotes = lget(getGitInfo, 'remote', {});
    return Object.keys(remotes).map(key => lget(remotes[key],'url'));
}


 /**
 * Get gitInfo
 * @function getGitInfo
 * @returns {Object}
 */
function getGitInfo () {
    return get.sync();
}

 /**
 * Get all remote url or all remote urls from current project
 * @param remoteName - string
 * @function getAllRemotesUrls
 * @returns {Array<string> | string}
 */
function getUrl(remoteName){
    const gitInfo = getGitInfo();
    return remoteName ? getRepoRemoteUrl(gitInfo, remoteName) : getAllRemotesUrls(gitInfo);
}

module.exports = getUrl