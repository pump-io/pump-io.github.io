---
title: "Pump.io 2.0.4 is available"
time:
  epoch: 1478936954
  utcoffset: "UTC-8"
author: "AJ Jordan"
categories:
  - releases
canonical: "https://strugee.net/blog/2016/11/pump.io-2.0.1-is-available"
---

Greetings!

After a beta period of just over a week, pump.io 2.0.4 is now available on npm and GitHub. Whoohoo!

(This was originally going to be 2.0.0, but we had to do a couple patch releases due to some outdated documentation and several critical bugs. 2.0.4 is mostly the same thing as 2.0.0.)

## Changes

Note that this release includes security improvements - namely, a newer Express version and a better TLS configuration - and therefore **admins are encouraged to upgrade ASAP**.

For the full list of changes, see [the change log][3].

### Breaking changes

(As I said in [the beta announcement][0]:)

Pump.io 2.0.4 is a drop-in replacement for 1.0.0 **unless** you have any plugins configured or you modify the templates.

Plugins are likely to be affected by the upgrade to Express 3.x. The easiest way to migrate is probably to just run pump.io, test out the relevant parts of the app, and see where your plugin crashes. You might also want to look at the [Express 3 change log][1].

If you modified the templates, you'll be affected by the templates' rewrite from utml into Jade. Migration should be relatively painless but has to be done manually. Your best bet will be to save a copy of the diff you created, undo your changes, upgrade, then use the diff you saved to reintroduce your changes. You'll have to run `npm run build` after making changes to Jade files.

### Non-breaking changes

This release is actually relatively minor in terms of non-breaking changes; however, we _do_ have some nice new improvements:

* A pump(1) manpage is now included
* Any internal web UI link with a `data-bypass` attribute is now ignored by the routing logic (useful for e.g. custom pages added by the admin)
* YouTube links in posts are now shown as  embeds by the web UI ([#1158][1])
* TLS connections now use Mozilla's "intermediate" cipher suite and forces server cipher suite preferences ([#1061][])
* Various minor fixes and improvements

## Upgrading

Upgrading is dead-simple. If you used our recommended install method, and installed from npm, you can upgrade with:

    sudo npm install -g pump.io@2

If you installed from source, you can upgrade with:

    git fetch
    # If you modified templates, save the diff at this step
	git checkout .
    git checkout v2.0.4
	npm install
    # Restore your template changes
	npm run lint:jade # Optional but recommended if you changed templates
	npm run build

Both of these methods will work whether you're running 0.3.0, 1.0.0, or 2.0.0 beta. Make sure to restart pump.io after performing the upgrade.

## Getting help

If you have any issues with the upgrade, get in touch with [the community][2]. You can also email me at <alex@strugee.net>.

 [1]: https://github.com/expressjs/express/blob/master/History.md#300--2012-10-23
 [2]: https://github.com/pump-io/pump.io/wiki/Community
 [3]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#201---2016-11-10
 [#1158]: https://github.com/pump-io/pump.io/issues/1158
 [#1061]: https://github.com/pump-io/pump.io/issues/1061
