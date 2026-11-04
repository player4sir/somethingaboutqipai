System.register("chunks:///_virtual/SchedulerManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, i, n;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy, n = e.director
        }],
        execute: function() {
            i._RF.push({}, "0b55ceC5C9KHYwcBhzdM6lu", "SchedulerManager", void 0);
            var a = function() {
                    function e() {
                        this._scheduler = null, this._callback = null, this._updateFunc = null, this._scheduler = n.getScheduler()
                    }
                    var t = e.prototype;
                    return t.schedule = function(e, t, i, n) {
                        return t || (t = 0), this._scheduler.enableForTarget(this), this._updateFunc = function(e) {
                            this._callback && this._callback(e)
                        }, this._scheduler.schedule(this._updateFunc, this, t, i, n), !!this._scheduler.isScheduled(this._updateFunc, this) && (this._callback = e, !0)
                    }, t.scheduleOnce = function(e, t, i) {
                        return t || (t = 0), this._scheduler.enableForTarget(this), this._updateFunc = function(e) {
                            this._callback && this._callback(e), this.unscheduleAll()
                        }, this._scheduler.schedule(this._updateFunc, this, t, 0, i), !!this._scheduler.isScheduled(this._updateFunc, this) && (this._callback = e, !0)
                    }, t.unscheduleAll = function(e) {
                        this._scheduler && this._scheduler.unscheduleAllForTarget(), this._callback = null, e && e()
                    }, t.isScheduled = function() {
                        return !!this._callback && this._scheduler.isScheduled(this._updateFunc, this)
                    }, e
                }(),
                o = new Map,
                r = new Map,
                s = e("SchedulerManager", function() {
                    function e() {
                        this.handler = {}, this.handler = {}
                    }
                    var i = e.prototype;
                    return i.schedulerInterval = function(t, i, n) {
                        void 0 === i && (i = 0);
                        var a, r = 1e3 * i,
                            s = e.index;
                        return a = n ? setInterval((function() {
                            t.call(n, r, s)
                        }), r) : setInterval((function() {
                            t(r, s)
                        }), r), this.unscheduleInterval(s), o.set(s, a), s
                    }, i.unscheduleInterval = function(e) {
                        e = Number(e), isNaN(e) || null != o.get(e) && null != o.get(e) && (clearInterval(o.get(e)), o.delete(e))
                    }, i.schedulerTimeout = function(t, i, n) {
                        var a = this;
                        void 0 === i && (i = 0);
                        var o, s = 1e3 * i,
                            c = e.index;
                        return o = n ? setTimeout((function(e) {
                            a.unscheduleTimeout(c), t.call(n, s, c)
                        }), s) : setTimeout((function(e) {
                            a.unscheduleTimeout(c), t(s, c)
                        }), s), this.unscheduleTimeout(c), r.set(c, o), c
                    }, i.unscheduleTimeout = function(e) {
                        e = Number(e), isNaN(e) || null != r.get(e) && null != r.get(e) && (clearTimeout(r.get(e)), r.delete(e))
                    }, i.schedule = function(t, i, n, o) {
                        var r = new a;
                        r.schedule(t, i, n, o);
                        var s = e.index;
                        return this.handler[s] = r, s
                    }, i.scheduleOnce = function(t, i, n) {
                        var o = this,
                            r = new a,
                            s = e.index;
                        return r.scheduleOnce((function(e) {
                            t(e), o.unschedule(s)
                        }), i, n), this.handler[s] = r, s
                    }, i.unschedule = function(e) {
                        e && this.handler[e] && (this.handler[e].unscheduleAll(), this.handler[e] = null)
                    }, i.unscheduleAll = function() {
                        var e = this;
                        for (var t in this.handler) Object.prototype.hasOwnProperty.call(this.handler, t) && this.unschedule(parseInt(t));
                        o.forEach((function(t, i) {
                            e.unscheduleInterval(i)
                        })), r.forEach((function(t, i) {
                            e.unscheduleTimeout(i)
                        }))
                    }, t(e, null, [{
                        key: "index",
                        get: function() {
                            return this._index = this._index + 1, this._index
                        }
                    }, {
                        key: "instance",
                        get: function() {
                            return this._instance && null != this._instance || (this._instance = new e), this._instance
                        }
                    }]), e
                }());
            s._index = 0, s._instance = null, i._RF.pop()
        }
    }
}))