System.register("chunks:///_virtual/MsgProcessTools.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SchedulerManager.ts"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.createForOfIteratorHelperLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.SchedulerManager
        }],
        execute: function() {
            i._RF.push({}, "9e5bee3vbBP2aMgIW8lZx7x", "MsgProcessTools", void 0);
            var a = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.scheduleOnce = function(e, t) {
                        return n.instance.schedulerTimeout(e, Math.max(t, 0) / 1e3)
                    }, t.unschedule = function(e) {
                        null != e && n.instance.unscheduleTimeout(e)
                    }, e
                }(),
                o = function() {
                    function e(e, t, i, n) {
                        this.id = void 0, this.lane = void 0, this.startedAt = void 0, this.completed = !1, this.holdUntil = 0, this.completeImpl = void 0, this.id = e, this.lane = t, this.startedAt = i, this.completeImpl = n
                    }
                    var t = e.prototype;
                    return t.complete = function(e) {
                        void 0 === e && (e = "complete"), this.completed || (this.completed = !0, this.completeImpl(e, this.holdUntil))
                    }, t.hold = function(e) {
                        var t = Number(e);
                        !isFinite(t) || t <= 0 || (this.holdUntil = Math.max(this.holdUntil, Date.now() + t))
                    }, t.isCompleted = function() {
                        return this.completed
                    }, e
                }();
            e("MsgProcessTools", function() {
                function e(e) {
                    void 0 === e && (e = new a), this.lanes = new Map, this.scheduler = void 0, this.defaultMaxMs = 1e4, this.scheduler = e
                }
                var i = e.prototype;
                return i.process = function(t, i, n) {
                    void 0 === n && (n = null);
                    var a = n || {},
                        r = t || a.lane || "default",
                        s = ++e.nextId;
                    if (a.bypass) {
                        var c = new o(s, r, Date.now(), (function() {}));
                        try {
                            i(c)
                        } catch (e) {
                            console.error("[MsgProcessTools] bypass dispatch error", e)
                        }
                        return s
                    }
                    return this.getLane(r).queue.push({
                        id: s,
                        lane: r,
                        dispatch: i,
                        hint: a
                    }), this.drain(r), s
                }, i.isBusy = function(e) {
                    if (e) {
                        var i = this.lanes.get(e);
                        return !!i && (i.running || i.queue.length > 0 || i.blockedUntil > Date.now())
                    }
                    for (var n, a = t(this.lanes.values()); !(n = a()).done;) {
                        var o = n.value;
                        if (o.running || o.queue.length > 0 || o.blockedUntil > Date.now()) return !0
                    }
                    return !1
                }, i.getPendingCount = function(e) {
                    var i;
                    if (e) return (null == (i = this.lanes.get(e)) ? void 0 : i.queue.length) || 0;
                    for (var n, a = 0, o = t(this.lanes.values()); !(n = o()).done;) a += n.value.queue.length;
                    return a
                }, i.clear = function(e) {
                    if (e) this.clearLane(e);
                    else {
                        for (var i, n = t(this.lanes.keys()); !(i = n()).done;) {
                            var a = i.value;
                            this.clearLane(a)
                        }
                        this.lanes.clear()
                    }
                }, i.getLane = function(e) {
                    var t = this.lanes.get(e);
                    return t || (t = {
                        queue: [],
                        running: !1,
                        blockedUntil: 0,
                        drainTimer: null,
                        generation: 0
                    }, this.lanes.set(e, t)), t
                }, i.drain = function(e) {
                    var t = this,
                        i = this.getLane(e);
                    if (!i.running) {
                        var n = i.blockedUntil - Date.now();
                        if (n > 0) null == i.drainTimer && (i.drainTimer = this.scheduler.scheduleOnce((function() {
                            i.drainTimer = null, t.drain(e)
                        }), n));
                        else {
                            var a = i.queue.shift();
                            a && this.runTask(i, a)
                        }
                    }
                }, i.runTask = function(e, t) {
                    var i = this;
                    e.running = !0;
                    var n = e.generation,
                        a = Date.now(),
                        r = t.hint || {},
                        s = this.toDuration(r.minMs),
                        c = this.toDuration(r.afterDispatchMs),
                        l = this.toDuration(r.maxMs),
                        u = l > 0 ? Math.max(l, s, c) : Math.max(this.defaultMaxMs, s, c),
                        d = null,
                        _ = new o(t.id, t.lane, a, (function(o, r) {
                            if (void 0 === o && (o = "complete"), void 0 === r && (r = 0), null != d && (i.scheduler.unschedule(d), d = null), e.generation === n) {
                                var l = Date.now(),
                                    _ = Math.max(a + s, l + c, r, e.blockedUntil);
                                e.blockedUntil = Math.max(e.blockedUntil, _), e.running = !1, "timeout" === o && console.warn("[MsgProcessTools] lane=" + t.lane + ", id=" + t.id + " timeout after " + u + "ms"), i.drain(t.lane)
                            }
                        }));
                    r.manualComplete && (d = this.scheduler.scheduleOnce((function() {
                        _.complete("timeout")
                    }), u));
                    try {
                        t.dispatch(_)
                    } catch (e) {
                        return console.error("[MsgProcessTools] dispatch error, lane=" + t.lane + ", id=" + t.id, e), void _.complete("dispatch-error")
                    }
                    r.manualComplete || _.complete("auto")
                }, i.clearLane = function(e) {
                    var t = this.lanes.get(e);
                    t && (null != t.drainTimer && (this.scheduler.unschedule(t.drainTimer), t.drainTimer = null), t.generation++, t.queue.length = 0, t.running = !1, t.blockedUntil = 0)
                }, i.toDuration = function(e) {
                    var t = Number(e);
                    return isFinite(t) && t > 0 ? t : 0
                }, e
            }()).nextId = 0, i._RF.pop()
        }
    }
}))