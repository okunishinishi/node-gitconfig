const GitUrlParse = require("git-url-parse");

function parseUrl (url) {
    return GitUrlParse(url)
}

module.exports = parseUrl;