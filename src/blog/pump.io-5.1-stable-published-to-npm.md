---
title: "pump.io 5.1 stable published to npm"
time:
  epoch: 1515236983
  utcoffset: "UTC-7"
author: "AJ Jordan"
categories:
  - releases
---

Last night I officially published pump.io 5.1 to npm as a stable release!

As I wrote in the beta announcement, this release contains a variety of improvements:

* [Zero-downtime restarts][], which allows administrators to seamlessly roll over to new configurations and codebases
* The daemon now generates startup log warnings on bad configurations, including insecure `secret` values and internal parameters
* An official `Dockerfile` is now included with the release
* The logged-out mobile homepage's menu icon is no longer incorrectly styled as black
* An authorization problem with SockJS connections has been fixed

5.1 stable _does_ include one change the beta didn't: a bump to the version of the `gm` npm package which we depend on. This bump was done as a precautionary measure, as previous versions of `gm` depended on a version of the `debug` module which was vulnerable to denial-of-service security bugs.

As a project, we addressed these bugs [back in October][] when we issued security releases for all supported release branches, and at the time we confirmed that the vulnerable function wasn't used by `gm`. Today's `gm` bump does _not_ constitute a security release; instead, we're just bumping the version as a precautionary measure in case we missed something in October's assessment of the situation.

Aside from the `gm` bump, there are (as usual) miscellaneous version bumps included in this release. We've also started tracking test suite coverage information as well as overhauled our [documentation on ReadTheDocs][], moving most of the in-repository documentation there.

If you want even more details of this release, you can also check out [the changelog].

pump 5.1 is a drop-in replacement for 5.0. That means if you're using our recommended installation method and installing from npm, you can upgrade with `npm install -g pump.io@5.1`. If you have a source-based install, you should merge and/or switch to the `v5.1.0` tag. And as always, if you encounter any problems, please feel free to reach out to the [community][] or [file bugs you find][].

Finally, I would be remiss if I didn't point out that pump.io has a **brand-new announcement mailing list**! While the blog is great for announcing new releases, not everyone finds it convenient to check. Also, if we issue new betas in the middle of a release cycle, these aren't typically announced on the blog. Therefore in the future _all_ new releases will be announced on the mailing list, not just initial betas. If you want to subscribe to the mailing list, you may do so [here][ml] - you'll get announcements of new features only, not e.g. feature announcements as seen on this blog. I hope people find this service useful!

 [the changelog]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#510---2018-01-05
 [community]: https://github.com/pump-io/pump.io/wiki/Community
 [file bugs you find]: https://github.com/pump-io/pump.io/issues
 [Zero-downtime restarts]: /blog/2017/08/zero-downtime-restarts-have-landed
 [back in October]: /blog/2017/10/denial-of-service-security-fixes-now-available
 [documentation on ReadTheDocs]: https://pumpio.readthedocs.io/
 [ml]: https://lists.strugee.net/mailman/listinfo/pumpio-announce
