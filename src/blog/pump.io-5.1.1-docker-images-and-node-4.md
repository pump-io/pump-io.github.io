---
title: "pump.io 5.1.1, Docker images, and sunsetting Node 4 support"
time:
  epoch: 1525575978
  utcoffset: "UTC-7"
author: "AJ Jordan"
categories:
  - releases
---

It's been a (relatively) long time since we've put anything on this blog, and I think it's high time for an update - especially since there are so many exciting things afoot! Not only is pump.io 5.1.1 now on npm, but we have new experimental Docker images! With [upstream having already dropped security support][node4], we're also planning to drop support for Node 4 soon.

Let's take these one at a time.

# pump.io 5.1.1

Several months ago I [landed] a patch from contributor [Camilo QS][] fixing a bug in pump.io's session handling in a route serving uploads. This bug made it so that non-public uploads would always return HTTP 403 Unauthorized, even if the user actually _was_ authorized. Clearly, this makes uploads unusable for people who don't like to post everything publicly. [Evan][] suggested that we should backport this bugfix since it's so high-impact, and I agree. So that's what pump.io 5.1.1 contains: a bugfix for uploads. Since it's a patch release 5.1.1 is a drop-in replacement for any 5.x pump.io release, so I'd highly encourage administrators to upgrade as soon as it's convenient. We'd also love it if you [file any bugs you find][], and feel free to get in touch with the [community][] if you need help or have questions. As a reminder, you can subscribe to our [low-volume announce mailing list][ml] to get email when we put out new releases like this. Also, I would be remiss if I didn't mention that my signing key setup has changed temporarily - see [here][keys] if you want to cryptographically verify the 5.1.1 release.

If you're on an npm-based install, you can upgrade with `npm install -g pump.io@5.1.1`. If you're on a source-based install, you can upgrade by integrating the latest commits in the `5.1.x` branch. See [here][changelog] for the changelog.

But that's not all. pump.io 5.1.1 also includes another exciting change: with this release, we've integrated automation to relase pump.io Docker images too.

# Docker images

We've wanted to release pump.io Docker images for [a long time][]. But Docker has a well-known problem: security vulnerabilities in Docker Hub images [are][sec1] [rampant][sec2]. Even though we've had a `Dockerfile` in the repository [for a while][dockerfile] thanks to contributor [thunfisch][], we didn't want to release official Docker images if we weren't sure we could always provide security support for them.

Unfortunately, Docker the company has done very little to address this problem. Most of their solutions are aimed at image consumers, not authors. Docker Hub has _some_ capacity for automatically rebuilding images, but unfortunately, it's not enough and you end up having to roll everything yourself anwyay. Pretty disappointing - so we had to get creative.

Our solution to this problem is to utilize Travis CI's [cron functionality][]. Every day, Travis will automatically trigger jobs that do nothing but build pump.io Docker images. These images are then pushed to Docker Hub. If nothing has changed, Docker Hub recognizes that the "new" images are actually identical with what's already there, and nothing happens. But if there _has_ been a change, like a native dependency receiving a security update, then the image ID will change and Docker Hub will accept the updated image. This cronjob is enabled for the `5.1.x` branch and master (which as a side effect, means that alpha Docker images are published within 24 hours of a git push), and in the future it will be enabled on all branches that we actively support. Thus, Docker users can easily set up automation to ensure that they're running insecure images for, at most, 24 hours.

If you're interested in trying out the Docker images, we'd love to know how it goes. They should still be treated as experimental at the moment, and early feedback would be super useful. You can read more details in our [ReadTheDocs documentation][dockerdocs].

Note that there are still more changes that we'd like to make to the Docker images. These changes didn't make it into the 5.1.1 packaging since they felt too invasive for a patch release. Instead we plan to make them in the next release, which is planned to be semver-major. Which brings me neatly to the last topic...

# Sunsetting Node 4, 5, and 7 support

We had a good run, but it's time to say goodbye: Node.js upstream has [marked][node4] Node 4.x as end-of-life, and in accordance with our [version policy][], we're doing the same. Since this is a semver-major change, we're also taking the opportunity to drop support for Node 5.x and Node 7.x. These changes have been made as of commit [32ad78][], and soon we'll be ripping out old code used to support these versions, as well as upgrading dependencies that have recently started requiring newer Nodes.

Anyone still on these versions is encouraged to upgrade as soon as possible, as Node.js upstream is no longer providing security support for them. Administrators can use the [NodeSource][] packages, or they can try out our new Docker images, which use a modern Node version internally.

Please reach out to the [community][] if you need any help making the transition. And good luck!

 [landed]: https://github.com/pump-io/pump.io/pull/1438
 [Camilo QS]: https://github.com/vxcamiloxv
 [Evan]: https://identi.ca/evan
 [ml]: https://lists.strugee.net/mailman/listinfo/pumpio-announce
 [keys]: https://strugee.net/blog/2018/04/new-temporary-signing-keys
 [changelog]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#511---2018-05-05
 [a long time]: https://github.com/pump-io/pump.io/issues/789
 [dockerfile]: https://github.com/pump-io/pump.io/pull/1348
 [thunfisch]: https://github.com/JanKoppe
 [community]: https://github.com/pump-io/pump.io/wiki/Community
 [file any bugs you find]: https://github.com/pump-io/pump.io/issues
 [sec1]: https://www.infoq.com/news/2015/05/Docker-Image-Vulnerabilities
 [sec2]: https://blog.acolyer.org/2017/04/03/a-study-of-security-vulnerabilities-on-docker-hub/
 [cron functionality]: https://docs.travis-ci.com/user/cron-jobs/
 [dockerdocs]: https://pumpio.readthedocs.io/en/latest/installation/about-docker-images.html
 [node4]: https://medium.com/the-node-js-collection/april-2018-release-updates-from-the-node-js-project-71687e1f7742
 [version policy]: https://github.com/pump-io/pump.io/wiki/Node.js-version-support
 [32ad78]: https://github.com/pump-io/pump.io/commit/32ad78812ed767621418b8dd57f11ce86a01b49f
 [NodeSource]: https://github.com/nodesource/distributions
