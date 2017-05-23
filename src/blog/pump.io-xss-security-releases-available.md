---
title: "pump.io XSS security releases available"
time:
  epoch: 1495529992
  utcoffset: "UTC-7"
author: "Alex Jordan"
categories:
  - releases
---

Well, apparently I forgot to make a blog post announcing that pump.io 4.0.0 stable is out. Surprise! Besides the version number it's the same as [4.0 beta 5][beta] anyway.

What is not the same as 4.0 beta 5, however, is the security releases I've just published. A semver-major release went out within the past 6 months, so per our [security support policy][security], we've released security patches for the past three stable releases:

1. pump.io 4.0.0 has been updated to pump.io 4.0.1
2. pump.io 3.0.2 has been updated to pump.io 3.0.3
3. pump.io 2.1.1 has been updated to pump.io 2.1.2

So what exactly required these releases? Well, the library we use to prevent cross-site scripting, [DOMPurify][], released some security patches recently. While we could conceivably just tell pump.io users to rerun `npm install -g` to get the updated library, it seemed safer to issue patch releases that bumped the minimum version for DOMPurify and have people upgrade to those. This gives a 100% guarantee that pump.io users will be protected with the absolute latest DOMPurify version.

As with any security release, we encourage admins to upgrade ASAP. If you've already installed the 4.0 release via npm, that's great! That's our recommended configuration, and you'll be able to upgrade by issuing:

    $ npm install -g pump.io@4

If you're still on the 3.x release series, you really should [upgrade to 4.x][], which contains significant work impacting security which was too big to go into a patch release (specifically, the upgrade to Express 4.x). But in the meantime, you can fix your XSS problems by running:

    $ npm install -g pump.io@3

And something similar if you're on 2.1.x:

    $ npm install -g pump.io@2

Though in this case it's even more urgent that you [upgrade to 4.x][].

Note that the above comands also assume you have an npm-based install, which we strongly recommend. If you have a source-based install, you will need to upgrade however you usually do - this will depend on how exactly you have pump.io set up.

As always, if you need help, get in touch with [the community][].

 [beta]: http://pump.io/blog/2017/04/pump.io-4.0-in-beta
 [security]: https://github.com/pump-io/pump.io/wiki/Security
 [DOMPurify]: https://github.com/cure53/DOMPurify
 [upgrade to 4.x]: https://pumpio.readthedocs.io/en/latest/upgrades/3.x-to-4.x.html
 [the community]: https://github.com/pump-io/pump.io/wiki/Community
