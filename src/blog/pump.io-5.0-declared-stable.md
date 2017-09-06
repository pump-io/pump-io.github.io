---
title: "pump.io 5.0 declared stable"
time:
  epoch: 1504675346
  utcoffset: "UTC-4"
author: "AJ Jordan"
categories:
  - releases
---

I'm super excited to announce that as of a couple days ago, pump.io 5.0 has now been declared stable and released!

This release cycle had an extra beta since I found a bug with the new display of shares. The fix ended up being trivial, though, and other than that there's been no changes from [the beta announcement][beta]:

* Documentation has been expanded
* Small improvements to the administrator experience have landed
* The web UI has gotten, among other things, some user experience polishing as well as upgrades to more performant and better-licensed libraries
* "Login with remote account" no longer crashes (although this one was backported in 4.1.1)
* The [systemd service][]  shipped with the package has significant security improvements
* Lots of internal refactoring and simplification made possible by dropping Node 0.10/0.12 support

As I said in the beta announcement, some of these changes - particularly the systemd changes and the fact that ([as previously announced][deprecation]) Node 0.10 and 0.12 are no longer supported - will require administrator intervention. Be sure to read our [upgrade guide][] for details on how to deal with these.

pump.io 5.0 is the most stable and secure release yet, so as always, I'd encourage all administrators to upgrade as soon as possible. And if you get stuck, the [community][] is always here to help.

Cheers!

 [systemd service]: https://pumpio.readthedocs.io/en/latest/administration/upstream-systemd-unit.html
 [deprecation]: http://pump.io/blog/2017/07/pump.io-4.1-is-out
 [upgrade guide]: https://pumpio.readthedocs.io/en/latest/upgrades/4.x-to-5.x.html
 [community]: https://github.com/pump-io/pump.io/wiki/Community
