---
title: "Pump.io: call for testers, call for feedback"
time:
  epoch: 1470850536
  utcoffset: "UTC-4"
author: "AJ Jordan"
categories:
  - community
  - code
canonical: "https://strugee.net/blog/2016/08/pump.io-call-for-testers-call-for-feedback"
---

So in my [last post][1], I mentioned that I'd left a couple things for a second blog post. This is that post, and instead of being about all the cool stuff going on in the pumpiverse, it's about stuff that you - yes, _you_! - can do! It's super easy too.

## Call for testers

So as I mentioned, the `utml-to-jade` branch is basically finished (see [PR #1170][2]). Since switching templating languages is a huge, huge change, by definition touching every single part of the Web UI, we want to make sure it's well-tested. This is especially critical given the fact that the Web UI unfortunately has [very little test coverage][3].

That's where pump.io system administrators come in. If you're a sysadmin and you're willing to test this change on your node, we'd very much appreciate it. There's very little risk, since I _think_ I've squashed all the regressions that happened, but you should be willing to [report bugs][5] if you _do_ run into them. In particular, you should look out for:

1. Links that seem to encompass too much text
2. Missing spaces - e.g. `AJ Jordanat [date]` instead of `AJ Jordan at [date]`
3. HTML code showing up on the page - e.g. `Test note<br />` instead of `Test note` followed by a line break

Note that the `utml-to-jade` branch incorporates all changes in the `master` branch, so you may want to check out the advice in [Running from Git master][4].

Sound interesting? Want to take part in the development of pump.io? Installing is super easy:

    $ [sudo] npm install -g e14n/pump.io#utml-to-jade

This will work even if you already have a (non-source) install of pump.io - just make sure to restart the server afterwards.

Note that this command has some semi-terrible logic to build Jade templates on install (this is a workaround for a deficiency in npm). If you get a scary warning message from npm, please [file an issue][5], making sure to include the full log.

## Call for design feedback

The other big thing that's happening is the pump.io 1.0.0 tshirt we're designing! I've spent quite a bit of time working on a variety of candidate designs which can be viewed in [this ownCloud share][6]. Obviously we want the coolest tshirt possible, so we're looking for any design feedback that people have. Anyone with some spare time can glance through the designs, and we'd be thrilled to get everyone's opinions.

If this sounds interesting, I'd welcome you to check out [the drafts][6]. As always, get in touch with the community through [our chatroom][7] or if you'd prefer, you can email me directly at [alex@strugee.net][8].

Thanks so much! :)

 [1]: https://strugee.net/blog/2016/08/new-stuff-in-pump.io
 [2]: https://github.com/e14n/pump.io/pull/1170
 [3]: https://github.com/e14n/pump.io/issues/147
 [4]: https://github.com/e14n/pump.io/wiki/Running-from-git-master
 [5]: https://github.com/e14n/pump.io/issues
 [6]: https://cloud.strugee.net/index.php/s/Ymw2RAdxyFZuuwu
 [7]: https://github.com/e14n/pump.io/wiki/Community#community-accounts-communication
 [8]: mailto:alex@strugee.net
