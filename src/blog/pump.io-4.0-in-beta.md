---
title: "pump.io 4.0 in beta"
time:
  epoch: 1491253390
  utcoffset: "UTC-4"
author: "Alex Jordan"
categories:
  - releases
---

pump.io 4.0.0 is officially in beta! Whooo!

# Highlights

This is a positively _huge_ release, and I'm so excited to share it with the community. Some highlights:

* Express 4.x - I wrote about the significance of this change [here](http://pump.io/blog/2017/03/express-4.x-in-pump.io-core), but suffice to say that this significantly improves security, performance, and future maintainability
* Performance and correctness improvements to the web UI's JavaScript
* Better administrative experience, including the ability to specify configuration via environment variables
* Better interoperability with the [IndieWeb](https://indieweb.org)

# Upgrading

The upgrade to Express 4.x and the improvements to configuration loading have the potential to break _some_ existing pump.io installations, although 95% of installs should be completely unaffected. If you want to help test this beta, please set aside extra time as necessary to perform this upgrade - full documentation can be found on [ReadTheDocs](https://pumpio.readthedocs.io/en/latest/upgrades/3.x-to-4.x.html).

As always, this release will follow our normal [release cycle](https://github.com/pump-io/pump.io/wiki/Release-cycle), which means that the stable 4.0.0 release will go out in about a month.

# Test days

Due to the complexity of this upgrade, we've decided to have some test days during the beta where we upgrade prominent nodes for a day, then downgrade them again. This will help expose problems earlier and make the upgrade smoother for everyone. So far Jason Self, who runs [Datamost](https://datamost.com/), has volunteered for this - if you're interested in joining him, please [get in touch](https://github.com/pump-io/pump.io/wiki/Community)!

Happy hacking!
