---
title: "Out now: pump.io 4.1 beta"
time:
  epoch: 1497609998
  utcoffset: "UTC-8"
author: "Alex Jordan"
categories:
  - releases
---

Perhaps some of you were wondering where pump.io's 4.1 release was, since our [release schedule][] says it should've been released at the beginning of this month?

Well, wonder no longer. This release was unfortunately delayed because of some big stuff in my personal life that got in the way of free software stuff (sorry!), but as of yesteray, pump.io 4.1 is officially in beta! Huzzah!

This was a relatively minor release, primarily improving some aspects of the web UI. Notably, the pump.io 4.1 beta includes support for [Subresource Integrity][], a web standard which will improve security for users on nodes with `"noCDN": false` in their pump.io configurations. A more complete list of changes is available in the [change log][].

As always, we advise caution when upgrading to beta releases. Please [report][bugs] any problems or bugs you encounter.

pump.io 4.1 beta is a drop-in replacement for pump.io 4.0.

# First time contributors

I would like to specially thank the following people, who contributed to the pump.io project for the first time during this release cycle:

* [Camilo QS][], who contributed a number of improvements to the web UI
* [@bio-boris][], who implemented [Subresource Integrity][] for the web UI
* [Ryan Riddle][], who made the web UI proactively warn if the user was trying to sign up with a blacklisted/reserved username (like `api` or `robots.txt`)

# Node.js 0.10 and 0.12 support ending

Finally, the stable release pump.io 4.1 will mark the end of pump.io's support for Node.js 0.10 and 0.12. These versions of Node are extremely old and are preventing us from making serious improvements to the codebase - you can see a list of these in [issue #1234][]. Note that in particular we cannot simultaneously support Node 7 and Node 0.10 due to our browser unit testing library, Zombie.

With the exception of Red Hat Enterprise Linux and CentOS, there are [no major Linux distributions][nodecompat] not shipping Node 4+ in some form. Most of them ship it out-of-the-box; the only one that does not is Debian. For our admins on Debian, Node 4 is available in `jessie-backports` and will become the officially supported version with the release of Debian Stretch (which is imminent). Plus, for all of these platforms, NodeSource offers [binary packages][] for all major Node versions that can be installed and managed through the system package manager. We'll also soon be making a Docker image available, which will allow people to run pump.io on any Docker-capable host, regardless of what Node version is shipped with their distribution.

You can read more about our Node.js version support policy [on our wiki][versions].

Here's to another pump.io beta!

 [release schedule]: https://github.com/pump-io/pump.io/wiki/Release-cycle
 [Subresource Integrity]: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
 [change log]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#410-beta-0---2017-06-15
 [report]: https://github.com/pump-io/pump.io/issues/new
 [Camilo QS]: https://github.com/vxcamiloxv
 [@bio-boris]: https://github.com/bio-boris
 [Ryan Riddle]: https://github.com/RyanRiddle
 [issue #1234]: https://github.com/pump-io/pump.io/issues/1234
 [nodecompat]: https://nodecompat.com/
 [binary packages]: https://github.com/nodesource/distributions
 [versions]: https://github.com/pump-io/pump.io/wiki/Node.js-version-support-policy
