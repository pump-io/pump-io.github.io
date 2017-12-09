---
title: "pump.io 5.1 is in beta"
time:
  epoch: 1512782697
  utcoffset: "UTC-5"
author: "AJ Jordan"
categories:
  - releases
---

I'm really excited to announce that pump.io 5.1 is officially in beta!

This release makes a wide array of improvements. One of the features I'm most excited about is [zero-downtime restarts][], which will allow administrators to gracefully roll over to new configurations and codebases with absolutely no user-visible impact! Aside from that, here's a list of highlights:

* The daemon now generates startup log warnings on bad configurations, including insecure `secret` values and internal parameters
* An official `Dockerfile` is now included with the release
* The logged-out mobile homepage's menu icon is no longer incorrectly styled as black
* SockJS connections no longer fail due to authorization problems

As usual, this release also includes some small updates to dependencies. Plus, we started tracking how much code our test suite covers! We've also significantly cleaned up the documentation and moved almost all of the in-repository documentation to ReadTheDocs, where it's a lot more organized and accessible. If you want more than just these highlights, you can check out [the changelog].

Note that while the repository includes a `Dockerfile` now, we have not yet begun publishing on Docker Hub due to some security logistics that need to be figured out - when we do, it'll be announced in all the usual places (including this blog).

I'm so excited for people to try out this release. 5.1 beta 0 is a drop-in replacement for 5.0, so if you're on 5.0 and want to live (more) on the bleeding edge, you can upgrade with `npm install -g pump.io@5.1` if you have an npm-based install. If you have a source-based install, you should merge and/or switch to the `v5.1.0-beta.0` tag. And as always, if you encounter any problems you can reach out to the [community][] or [file bugs you find][].

 [the changelog]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#510-beta-0---2017-12-08
 [community]: https://github.com/pump-io/pump.io/wiki/Community
 [file bugs you find]: https://github.com/pump-io/pump.io/issues
 [zero-downtime restarts]: /blog/2017/08/zero-downtime-restarts-have-landed
