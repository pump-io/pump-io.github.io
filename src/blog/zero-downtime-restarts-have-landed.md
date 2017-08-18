---
title: "Zero-downtime restarts have landed"
time:
  epoch: 1503046876
  utcoffset: "UTC-7"
author: "AJ Jordan"
categories:
  - code
---

I'm thrilled to announce that zero-downtime restarts, which I've been hacking on for the past week or two, [have just landed][pr] in pump.io master!

Zero-downtime restarts require at least two cluster workers and MongoDB as a Databank driver (we'll eventually relax the latter requirement as we continue to test the feature). Here's how it works:

1. An administrator sends SIGUSR2 to the master pump.io process (note that SIGUSR1 is [reserved by Node.js][sigusr1])
2. The master process builds a queue of worker processes that need to be restarted
3. The master process picks a random worker from the queue and sends it a signal asking it to gracefully shut down
4. The worker process shuts down its HTTP server, which causes it to stop accepting new connections - it will do the same for the bounce server, if applicable
5. The worker shuts down its database connection once the HTTP server is completely shut down, meaning that it's done servicing in-flight requests
6. The worker closes its connection with the master process and Node.js automatically terminates due to there being no listeners on the event loop
7. The master recognizes the death of the worker process, replaces it, waits for the new worker to signal that it's listening for connections, and repeats from step 3 until the queue is empty

This works because only one worker is shut down at a time, allowing the other workers to continue servicing requests while the one worker is restarted. We wait until the new worker actually signals it's ready to process requests before beginning the process for another worker.

Such a feature requires careful error handling, so there are a lot of built-in checks to prevent administrators from shooting themselves in the foot:

* If there's a restart already in progress, SIGUSR2 is ignored
* If there's only 1 cluster worker, the restart request is refused (because there would be downtime and you should just restart the master)
* The master process will load a magic number from the _new_ code and compare it with the _old_ magic number loaded when the master process started - if they don't match, SIGUSR2 will be refused. This number will be incremented for things that would make zero-downtime restarts cause problems, for example:
  * The logic in the master process itself changing
  * Cross-process logic changing, such that a new worker communicating with old workers would cause problems
  * Database changes
* If a worker process doesn't shut itself down within 30 seconds, it will be killed
* If a zero-downtime restart fails for any reason, the master process will refuse SIGUSR2 and will not respawn any more cluster workers, even if they crash - this is because something must have gone _seriously_ wrong, either with the master, the workers, or the new code, and it's better to just restart everything. Currently this condition occurs when:
  * A new worker died directly after being spawned (e.g. from invalid JSON in `pump.io.json`)
  * A new worker signaled that it couldn't bind to the appropriate ports

While these checks do a lot to catch problems, they're not a silver bullet, and we strongly recommend that administrators watch their logs as they trigger restarts. However, this is still a _huge_ win for the admin experience - the most exciting part of this for me is that it's the first step we need to take towards having fully automatic updates, which has been a dream of mine for a long while now.

Admins running from git master can start experimenting with this feature today, and it will be released during the _next_ release cycle - i.e. with the 5.1 beta and stable, _not_ the current 5.0 beta. Since this is highly experimental, we want this to have as much time for testing as possible. You can also check out the [official documentation][] on this feature.

I hope people enjoy this! And as always, feel free to [report any bugs][issues].

 [pr]: https://github.com/pump-io/pump.io/pull/1406
 [sigusr1]: https://nodejs.org/api/process.html#process_signal_events
 [issues]: https://github.com/pump-io/pump.io/issues/new
 [official documentation]: https://pumpio.readthedocs.io/en/latest/administration/zero-downtime-restarts.html
