---
title: "New stuff in pump.io"
time:
  epoch: 1470633992
  utcoffset: "UTC-4"
author: "Alex Jordan"
categories:
  - code
  - community
  - documentation
canonical: "https://strugee.net/blog/2016/08/new-stuff-in-pump.io"
---

So I promised [a (long) while ago][1] that I'd blog about all the stuff going on in [pump.io][2]. And there is a _lot_ going on. Where to even begin?

## LFNW talk

I think the first thing I should mention is [the talk][3] I gave at LinuxFest Northwest this year. It went really, really well (even though I finished half the slides the night before), and people seemed to be really engaged, especially during questions. It starts off by covering the history behind pump.io: that includes the relevant protocols, like OStatus and [ActivityStreams][4], but also the motivation behind abandoning StatusNet (aka current GNU Social) in favor of a brand-new network. Next I move on to the way that pump.io itself works, namely, its function as a generic ActivityStreams distribution engine. To put this another way, I explain why this quote from [the README][5]:

> I post something and my followers see it. That's the rough idea behind the pump.

is a pretty accurate way of describing what pump.io actually does. (I quote that quite a few times in the slides themselves.) I end with a discussion of the recent developments in the community, which are of course wonderful, and a short call-to-action for people to contribute - either directly to the software, or by joining the network and spreading pump.io.

Oh, and by the way - the talk was recorded! So you can watch it [on YouTube][6] or, even better, [on my personal MediaGoblin][7]. Fitting, since (as I mention in the talk) MediaGoblin federation will soon be released, and it's based on (and fully interoperable with) the pump.io protocol!

## Conservancy application

Pump.io is applying to the [Software Freedom Conservancy][8]! This is super fantastic for us for a number of reasons. One of the biggest advantages is the fact that inside Conservancy (assuming our application is accepted), we'll be able to take donations much, much easier. This is primarily important because nodes in the pump.io network are volunteer-run, but they still require funds to operate. We're thinking about models wherein people will be able to donate to "pump.io", and then some (most?) of those funds will be used to pay for the network. (In particular, they'll be used to pay for the existing E14N nodes that Evan currently runs, which will become extremely useful once we transition those nodes to community owners). Conservancy also provides useful miscellaneous services, like owning our logo and making sure that if we encounter license violations, the license is properly enforced. But perhaps most importantly, becoming part of Conservancy cements pump.io even more in the community - both the group of people working on the software & network, but also the larger free software world.

## ReadTheDocs

We've started a [dedicated space][20] for project documentation, hosted on ReadTheDocs. We're plannning to move a bunch of content from the GitHub wiki into this project, and hopefully it'll become a thorough and central place for pump.io documentation - both for users and for deployers.

## Triage

We've spent quite a bit of time going through open issues and prioritizing them. A lot of issues have a release target now, and it feels really nice to feel like our issue tracker is a bit more organized.

Special thanks to [Laura Arjona][16] for driving this work.

## Various minor code improvements

There have been a _bunch_ of small bugfixes and improvements that have gone into the `master` branch - some of them user-facing, and some of them making the development experience better. Notable changes include:

* Migrating from Connect 1.x to Connect 2.x (this is just a start - Connect 2.x is still deprecated, but it gets us closer than we were to relying on a fully non-deprecated stack)
* JSHint is now automatically run against `bin/` and `routes/` when `npm test` is run. This makes it super obvious when there are regressions in code quality, especially in Pull Requests (since Travis CI will fail if JSHint doesn't succeed.)
* JSCS is now used to enforce code style. It's automatically run against the entire codebase (whoo!) when you run `npm test`, and it's awesome for the same reason - much of the style-related feedback that would've previously ended up in a Pull Request can now be dealt with directly on a local development machine, reducing PR review time for both the reviewer _and_ the contributor.
* LibreJS is now [supported][19]
* Tests now pass! Whooooooooo! (Thanks to Menno Vossen for sending [the enormous Pull Request][9] that made this happen.)

Those are just the bigger ones, of course - there are a bunch of even smaller problems that got squashed as well. I'd also like to point out that quite a few of these were long-standing PRs which _finally_ made it into core, which is awesome for everyone.

## Express 3.x migration

I've been putting in a lot of work to migrate pump.io to Express 3.x. It's a huge amount of work, but when complete, it will bring us very, very close to being able to migrate onto Express 4.x, which is modern and fully-supported by upstream. Basically what I've been doing is just running the app, seeing where it crashes, going to the exception site, and fixing the problem. Rinse, repeat. You can check out this work on the [`express-3.x`][10] branch - currently, this branch can successfully start up the app, but will crash pretty soon after you try to do almost anything else.

This work, unfortunately, is on hold while another important project is completed: converting all the templates from utml to Jade.

## utml to Jade transition

This is basically what it sounds like. Previously, the templates in pump.io were based on [utml][11], which is essentially a thin wrapper around [Underscore.js's `_.template()`][12] function. However, utml doesn't work with Express 3.x (and it's not really worth _making_ it work), plus it's not the prettiest to work with. [Jade][13] is an extremely popular templating language in Node-land nowadays, so a couple months ago I spent somewhere between 14 and 18 hours going through and rewriting all the utml in Jade, which was absolutely brutal - but necessary. Then, of course, I had to fix the client-side templating logic to handle Jade instead of Underscore templates, which took quite a while, along with the fact that I made a very large number of minor (largely cosmetic) errors in my conversions.

As I said above, this was kind of awful work (_especially_ the beginning), but it's necessary and great, as it paves the way for Express 3.x _and_ massively improves the contributor experience.

You can check out the gory details of this work in [PR #1170][14], and the original reasoning behind why we're doing this in [issue #1167][15]. This work is actually done, but I'm going to write a separate blog post about it, calling for testers.

## Upcoming 1.0.0 release

Last but **certainly** not least, we're gearing up for our 1.0.0 release! From a codebase standpoint, this is really just a small bugfix release (although it will make a lot of things less broken and - if I recall correctly - fix the actual installation process), but more importantly, it means that we're now committing to [semantic versioning][17], which is a win for everyone (but especially administrators). The main thing that needs to be fixed before this goes out the door is the behavior of the XSS scrubber, which was accidentally made a little too aggressive. This is being tracked in [issue #1169][18].

As a bonus, I'm also designing a t-shirt that (if there's sufficient interest) we may print as a celebration of this release - but more on this in my next post.

 [1]: https://strugee.net/blog/2016/05/stratic-part-one
 [2]: http://pump.io
 [3]: https://linuxfestnorthwest.org/2016/sessions/pumpio-community
 [4]: http://activitystrea.ms
 [5]: https://github.com/e14n/pump.io/blob/master/README.md
 [6]: https://www.youtube.com/watch?v=uQ6RVTFdYNc
 [7]: https://media.strugee.net/u/alex/m/linuxfest-northwest-2016-pump-io-the-community/
 [8]: https://sfconservancy.org/
 [9]: https://github.com/e14n/pump.io/pull/1136
 [10]: https://github.com/e14n/pump.io/tree/express-3.x
 [11]: https://github.com/mikefrey/utml
 [12]: http://underscorejs.org/#template
 [13]: http://jade-lang.com/
 [14]: https://github.com/e14n/pump.io/pull/1170
 [15]: https://github.com/e14n/pump.io/issues/1167
 [16]: https://identi.ca/larjona
 [17]: http://semver.org/
 [18]: https://github.com/e14n/pump.io/issues/1169
 [19]: https://github.com/e14n/pump.io/pull/1058
 [20]: http://pumpio.readthedocs.io/en/latest/
