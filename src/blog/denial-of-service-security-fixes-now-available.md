---
title: "Denial-of-service security fixes now available"
time:
  epoch: 1506894059
  utcoffset: "UTC-4"
author: "AJ Jordan"
categories:
  - releases
  - security
edited:
  epoch: 1506997386
  utcoffset: "UTC-4"
---

Recently some denial-of-service vulnerabilities were discovered in various modules that we indirectly depend on. I've bumped Express and `send` to pull in patched versions, and I've updated our fork of `connect-auth` to require a patched version of Connect, too. The remaining vulnerabilities I've confirmed don't affect us.

Because of these version bumps, I've just put out security releases which all administrators are encouraged to upgrade to as soon as possible. A semver-major release (5.0.0) was released within the past 6 months so per our [security support policy][security] this means there are three new releases:

1. pump.io 5.0.2 replaces 5.0.0 and is available now on npm
2. pump.io 4.1.3 replaces 4.1.2 and is available now on npm
3. pump.io 4.0.2 will replace 4.0.1 <strike>and is currently undergoing automated testing (it'll be on npm shortly)</strike> **Update:** pump.io 4.0.2 is now on npm

As these are security releases we encourage admins to upgrade as soon as possible. If you're on 5.0.0 installed via npm - our recommended configuration - you can upgrade by issuing:

    $ npm install -g pump.io@5

If you're on 4.1.3, you can upgrade by issuing:

    $ npm install -g pump.io@4

And when 4.0.2 is out, if you're on 4.0.1 you can upgrade by issuing:

    $ npm install -g pump.io@4.0

Note though that 4.1.3 is a drop-in replacement for 4.0.2, so you should consider just upgrading to that instead. Or even better, [upgrade to 5.x][]!

If you don't have an npm-based install, you'll have to upgrade however you normally do. How to do this will depend on your particular setup.

As always, if you need help, you should get in touch with [the community][]. I'd also like to specifically thank [Jason Self][], who generously deployed a 24-hour private beta of these fixes on [Datamost][]. One of the version bumps was ever-so-slightly risky, and being able to test things in production before rolling out patches for the entire network was invaluable. I wouldn't be as confident as I am in these releases without his help. So thanks, Jason - I really appreciate it!

 [security]: https://github.com/pump-io/pump.io/wiki/Security
 [upgrade to 5.x]: https://pumpio.readthedocs.io/en/latest/upgrades/4.x-to-5.x.html
 [the community]: https://github.com/pump-io/pump.io/wiki/Community
 [Jason Self]: https://identi.ca/jxself
 [Datamost]: https://datamost.com/
