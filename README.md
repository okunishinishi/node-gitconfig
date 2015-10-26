gitconfig
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-gitconfig
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-gitconfig
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-gitconfig.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-gitconfig/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-gitconfig
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-gitconfig.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-gitconfig.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-gitconfig
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-gitconfig.svg
[bd_npm_url]: http://www.npmjs.org/package/gitconfig
[bd_npm_shield_url]: http://img.shields.io/npm/v/gitconfig.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/gitconfig.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Run git config command

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install gitconfig --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

```javascript
var gitconfig = require('gitconfig');


gitconfig.set({
    'user.mail': "foo@example.com"
}, {
    location:'local'
},function (err) {
    /*...*/
});
gitconfig.unset(['user.mail'], {
    location:'local'
},function (err) {
    /*...*/
});

gitconfig.get({
    location:'global'
}, function(err, config){
    /*...*/
});
```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-gitconfig/blob/master/LICENSE).

<!-- LICENSE End -->


