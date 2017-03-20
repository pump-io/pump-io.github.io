---
title: "Express 4.x in pump.io core"
time:
  epoch:
  utcoffset:
author: "Alex Jordan"
categories:
  - code
---

So I thought I'd take a moment to announce that the upgrade from Express 2.x to Express 4.x is [finally complete][pr]! I fixed up the last couple test failures last Wednesday, and the branch got merged on Thursday.

# A long time coming

Believe it or not, the work to do this upgrade started almost an entire _year_ ago. Express 2.x has been outdated and unmaintained for a long time now, so upgrading has been a high priority. However, it wasn't as simple as adjusting a version number - there were a staggering number of changes that needed to be made due to Express deprecating, removing, and changing things around. One of the most significant problems was the fact that the old template system that we used, utml, was not compatible with Express 3.x and above. That meant that we had to rewrite every single template into a modern language - an effort that resulted in [over a thousand lines changed][jade]!

However, the time for Express 4.x has finally arrived. With that and some other trivial version bumps, I'm proud to announce that pump.io is fully up-to-date in terms of dependencies with only three, non-critical exceptions. Whooooo!

# Immediate benefits

There are a lot of reasons this is immediately awesome:

1. Express 4.x fixes significant performance problems that existed in Express 3.x
2. Relatedly, Express 4.x fixes some security problems present in 3.x
3. The fact that our dependencies are _finally_ up-to-date means that we can (and do!) now make use of [Greenkeeper][] and the [Node Security Platform][nsp] to automatically track dependencies to make sure they're up-to-date and not introducing security vulnerabilities

That last one is particularly significant. Greenkeeper and NSP will continuously monitor the project's dependencies and automate away a lot of the pain that's associated with keeping pump.io up-to-date. Everyone will get a more secure and stable codebase because of this setup.

# Looking forward

The Express 4.x upgrade is a big change, and it's definitely possible that stuff has broken. We want to make sure that breakage doesn't make it into production. This change went into pump.io 4.0, which will go through our normal [release cycle][]. That means it'll be in beta for a month before being released. As a part of that, [Jason Self][] - who's kind enough to administer [Datamost][] - has agreed to have a test day where Datamost upgrades to the beta for a day, then downgrade it again. This test day will give us much wider exposure than we would've gotten otherwise, which will be incredibly valuable feedback in the effort to identify and fix regressions. We haven't set a date yet, but if you'd like to join Jason in helping us find bugs, please get in touch with [the community][]. We'd love your help.

Beyond the immediate release, though, there's still things to look forward to. Express 4.x gives us a better way to structure routing code, and a refactor to use this structure [is planned][router]. There's a lot of room for improvement. But really, the most important benefit is this: technical debt is a far less pressing issue than before. That means that we can shift focus and spend more time fixing user-facing bugs, adding useful features, and generally improving the experience for our users. I couldn't be more excited.

 [pr]: https://github.com/pump-io/pump.io/pull/1208
 [jade]: https://github.com/pump-io/pump.io/pull/1170
 [Greenkeeper]: https://greenkeeper.io/
 [nsp]: https://nodesecurity.io/orgs/pumpio/projects/32213bb8-f9a6-4dd0-8fc6-5caa8ea5f8fc
 [release cycle]: https://github.com/pump-io/pump.io/wiki/Release-cycle
 [Jason Self]: https://jxself.org/
 [Datamost]: https://datamost.com/
 [the community]: https://github.com/pump-io/pump.io/wiki/Community
 [router]: https://github.com/pump-io/pump.io/issues/1232
