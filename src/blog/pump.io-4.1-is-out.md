---
title: "pump.io 4.1 is out"
time:
  epoch: 1498964241
  utcoffset: "UTC-8"
author: "AJ Jordan"
categories:
  - releases
---

pump.io 4.1 is out!

As usual, nothing much has changed since [the beta release][beta]. This release includes:

* Minor web UI improvements
* [Subresource Integrity][sri] in the web UI
* A switch to a pure-JavaScript bcrypt, which should improve installs on non x86 platforms and Docker
* Some other [minor improvements and fixes][minor improvements]

Remember that [with this release][beta], Node 0.10 and Node 0.12 support is officially obsolete. This change paves the way for a lot of really important improvements, and in fact, we've already introduced a lot of changes that reduce technical debt. Note that since the beta announcement, Debian Stretch has been released, which ships Node 4 in `main`. You can read more about our Node.js support policy [on our wiki][wiki].

Enjoy the new release, and remember to [report any bugs][issues]!

 [beta]: /blog/2017/06/out-now-pump.io-4.1-beta
 [sri]: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
 [minor improvements]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#410-beta-0---2017-06-15
 [wiki]: https://github.com/pump-io/pump.io/wiki/Node.js-version-support
 [issues]: https://github.com/pump-io/pump.io/issues
