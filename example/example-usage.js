"use strict";

const gitconfig = require('gitconfig');

// Set git config values.
gitconfig.set({
    'user.mail': "foo@example.com"
}, {
    location: 'local'
}, function (err) {
    /*...*/
});

// Unset git config values.
gitconfig.unset(['user.mail'], {
    location: 'local'
}, (err) => {
    /*...*/
});

// Git all config values.
gitconfig.get({
    location: 'global'
}, (err, config) => {
    /*...*/
});