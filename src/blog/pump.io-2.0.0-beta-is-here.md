---
title: "Pump.io 2.0.0 beta is here"
time:
  epoch: 1478142359
  utcoffset: "UTC-7"
author: "AJ Jordan"
categories:
  - releases
canonical: "https://strugee.net/blog/2016/11/pump.io-2.0.0-beta-is-here"
---

Greetings!

As pump.io is gearing up for our 2.0.0 release, I just published a beta to npm. We'd love it if any interested admins could upgrade their nodes and report any bugs you may run in to. (All bug reports are helpful, but just so we're clear, we're likely to only fix regressions from 1.0.0.)

## Changes

Pump.io 2.0.0 beta is a drop-in replacement for 1.0.0 **unless** you have any plugins configured or you modify the templates.

Plugins are likely to be affected by the upgrade to Express 3.x. The easiest way to migrate is probably to just run pump.io, test out the relevant parts of the app, and see where your plugin crashes. You might also want to look at the [Express 3 change log][1].

If you modified the templates, you'll be affected by the templates' rewrite from utml into Jade. Migration should be relatively painless but has to be done manually. Your best bet will be to save a copy of the diff you created, undo your changes, upgrade, then use the diff you saved to reintroduce your changes. You'll have to run `npm run build` after making changes to Jade files.

For the list of non-breaking changes, see [the change log][3].

## Upgrading

Upgrading is very easy. If you used our recommended install method, and installed from npm, you can upgrade to the beta with:

    sudo npm install -g pump.io@beta

If you installed from source, you can upgrade with:

    git fetch
    # If you modified templates, save the diff at this step
	git checkout .
    git checkout v2.0.0-beta.1
	npm install
    # Restore your template changes
	npm run lint:jade # Optional but recommended if you changed templates
	npm run build

Make sure to restart pump.io after performing the upgrade.

## Getting help

If you have any issues upgrading to or running the beta, please don't hesitate to get in touch with [the community][2]. You can also email me at <alex@strugee.net>.

 [1]: https://github.com/expressjs/express/blob/master/History.md#300--2012-10-23
 [2]: https://github.com/e14n/pump.io/wiki/Community
 [3]: https://github.com/pump-io/pump.io/blob/master/CHANGELOG.md#200-beta-1---2016-11-02
