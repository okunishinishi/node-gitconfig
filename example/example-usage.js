var gitconfig = require('gitconfig');


gitconfig.set({
    'user.mail': "foo@example.com"
}, {
    location:'local'
},function (err) {
    /*...*/
});

gitconfig.get({
    location:'global'
}, function(err, config){
    /*...*/
});