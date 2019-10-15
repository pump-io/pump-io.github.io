---
title: "pump.io DOMPurify security fixes available"
time:
  epoch: 1571178481
  utcoffset: "UTC-7"
author: "AJ Jordan"
categories:
  - releases
  - security
---

Recently the cross-site-scripting sanitization library that pump.io uses, [DOMPurify][], published several security advisories for mXSS vulnerabilities affecting browsers based on the Blink rendering engine - you can find the latest one, for example, [here][advisory]. As we've done in the past, the pump.io project is publishing security releases to ensure that everyone is using the latest version of DOMPurify. Per our [security support policy][security], we are providing patches for the current stable release and the previous stable release:

1. pump.io 5.1.2 has been updated to pump.io 5.1.3
2. pump.io 5.0.2 has been updated to pump.io 5.0.3

As these are security releases we encourage administrators to upgrade as soon as possible. Both 5.1.3 and 5.0.3 are drop-in replacements for their predecessors. If you have pump.io 5.1 installed via npm - our recommended configuration - you can upgrade with:

    $ npm install -g pump.io@5

If you're on pump.io 5.0, we recommend that you also run the above command to upgrade to 5.1 - it's a drop-in replacement for 5.0. However, if you want to stick with 5.0 for the time being, you can install a patched version with:

    $ npm install -g pump.io@5.0

Note that if you have a source-based install, the above commands won't work and you will need to upgrade however you usually do - this will depend on how exactly you have pump.io set up.

If you need help, or if you have questions about these security releases, get in touch with [the community][].

 [DOMPurify]: https://github.com/cure53/DOMPurify
 [advisory]: https://lists.ruhr-uni-bochum.de/pipermail/dompurify-security/2019-October/000012.html
 [security]: https://github.com/pump-io/pump.io/wiki/Security
 [the community]: https://github.com/pump-io/pump.io/wiki/Community
