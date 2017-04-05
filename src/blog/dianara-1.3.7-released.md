---
title: "Dianara v1.3.7 released"
time:
  epoch: 1490565600
  utcoffset: "UTC+2"
author: "JanKusanagi"
categories:
  - clients
canonical: "https://jancoding.wordpress.com/2017/03/26/dianara-v1-3-7-released/"
---

A new version of [Dianara](https://jancoding.wordpress.com/dianara/), my desktop client for [the Pump social network](https://pumpio.readthedocs.io/en/latest/userguide.html), has just been released. This will be the last of the 1.3.x series, and **the last one to support Qt 4**.


![The image viewer](https://jancoding.files.wordpress.com/2017/03/dianara-v1-3-7-release.png)


It’s another small release. The biggest change is the updated image viewer, which now supports zooming with the mouse/touchpad, and dragging the image around, as full-blown image viewers usually support ;)

If you want to build it with Qt 5.x, note that **your system will need a Qt 5 build of the QOAuth library**, which not all GNU/Linux distributions provide yet.  [Mageia 6 does](http://madb.mageia.org/package/show/application/0/release/cauldron/name/libqoauth-qt5-devel), and so do Archlinux, openSUSE (in a separate repository) and Debian (in Experimental). If you have that, but experience problems building it this way, your [QOAuth might be missing a feature file (.prf)](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=825976), like used to be the case in Debian.


# Changelog

The changes [since v1.3.6](https://jancoding.wordpress.com/2016/12/17/dianara-v1-3-6-is-out/) are:

*The image viewer now supports dragging the image around with the mouse, zooming with the wheel, and rotating animated images correctly.
*Fixed case-insensitive sorting of contacts in auto-completion lists, when typing @ while creating a post. This means that “Person A” will appear next to “person b”, not after “Z-contact”.
*Your server’s version will be shown in the log.

