---
title: "pump.io 5.0 beta released"
time:
  epoch: 1502131872
  utcoffset: "UTC-4"
author: "AJ Jordan"
categories:
  - releases
draft: true
---

I'm excited to announce that pump.io 5.0.0 is now officially in beta!

This is another big release and makes a wide variety of improvements. Here are some highlights from [the changelog][]:

* More complete documentation
* Small improvements to the administrator experience
* A better web UI, including some user experience polishing as well as an upgrade to more performant and better-licensed libraries
* A fix for crashes related to "login with remote account" (although this one was backported in 4.1.1)
* Significant security improvements in the [systemd service][] shipped with the package
* Lots of internal refactoring and simplification made possible by dropping Node 0.10/0.12 support

Many of these changes - particularly the systemd changes and the fact that ([as previously announced][deprecation]) Node 0.10 and 0.12 are no longer supported - will require administrator intervention. Be sure to read our [upgrade guide][] for details on how to deal with these changes.

All of these features add up to make pump.io 5.0 beta the most stable and secure release yet. As always, it will go through our beta period for about a month before being released as a fully stable version. If you try it out, the [community][] would love to hear about it - and be sure to [report any bugs][bugs] you encounter!

 [the changelog]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#500-beta-0---future
 [systemd service]: https://pumpio.readthedocs.io/en/latest/administration/upstream-systemd-unit.html
 [deprecation]: http://pump.io/blog/2017/07/pump.io-4.1-is-out
 [upgrade guide]: https://pumpio.readthedocs.io/en/latest/upgrades/4.x-to-5.x.html
 [community]: https://github.com/pump-io/pump.io/wiki/Community
 [bugs]: https://github.com/pump-io/pump.io/issues
