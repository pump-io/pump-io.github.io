---
title: "Pump.io 1.0.0 is now available!"
time:
  epoch: 1472279874
  utcoffset: "UTC-7"
author: "Alex Jordan"
categories:
  - releases
  - code
canonical: "https://strugee.net/blog/2016/08/pump.io-1.0.0-is-now-available"
---

[Pump.io 1.0.0][1] is officially available! Whoooo!

I just wanted to write up an announcement real quick to celebrate. Here's a sample what's gone into this release:

* Node 4.x support
* Lots of security improvements including a better cross-site scripting scrubber and security-related headers that help protect the web UI (most notably, the web UI now declares a Content Security Policy)
* Minor improvements to the API to make it (slightly) smarter
* [LibreJS][2] support
* Numerous dependency upgrades, most notably Connect
* And of course, tons of minor bugfixes and improvements

For more details, see the brand-new [change log][3].

And of course since we're now past 0.x.x releases, we're now officially making a commitment to the community to make only API-compatible changes going forward (or at least, until 2.0.0!).

As this release _does_ improve security and fixes a lot of bugs, node administrators are encouraged to upgrade as soon as possible. If you have a global, npm-based install, you can upgrade with:

    sudo npm install -g pump.io

And with a source-based install:

    git pull
    git checkout v1.0.0
	npm install --production

If you're upgrading from 0.3.0, everything should Just Work(tm). Don't forget to restart your daemon!

One final note - the rumors are true. While we're not doing so _yet_, we are, in fact, planning to deprecate running under Node.js 0.10 and 0.12 very soon. Also, if you upgrade to Node.js 4.x early, the new, better XSS scrubber will be enabled - _however_, be aware that pump.io is far less tested under Node.js 4.x and you are likely to run into more bugs than you would under 0.10 or 0.12. This is an unfortunate situation, but sadly there's really nothing to be done about it. :(

Special thanks to Menno Vossen, Laura Arjona, Evan Prodromou, Jan Kusanagi and all the other volunteers who did so many different things to make this release happen. It truly wouldn't have happened without you.

Enjoy the release!

With <3,

AJ

 [1]: https://github.com/e14n/pump.io/releases/tag/v1.0.0
 [2]: https://www.gnu.org/software/librejs/
 [3]: https://github.com/e14n/pump.io/blob/master/CHANGELOG.md#100---2016-08-26
