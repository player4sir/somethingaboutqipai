System.register("chunks:///_virtual/BaseComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./EventManager.ts", "./ResLoaderManager.ts", "./SchedulerManager.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy, a = e._decorator, o = e.Component
        }, function(e) {
            r = e.Logger
        }, function(e) {
            s = e.EventManager
        }, function(e) {
            c = e.ResLoaderManager
        }, function(e) {
            l = e.SchedulerManager
        }],
        execute: function() {
            var u;
            n._RF.push({}, "9e9f42j6dhK26+UF5RS3/rQ", "BaseComponent", void 0);
            var d = a.ccclass,
                _ = a.menu;
            e("BaseComponent", d("BaseComponent")(u = _("vc/BaseComponent")(u = function(e) {
                t(a, e);
                var n = a.prototype;

                function a() {
                    var t;
                    return (t = e.call(this) || this)._params = void 0, t.preLoadMap = new Map, t.extent_onLoad = null, t.extent_onDestroy = null, t.event_defents = {}, t._Eventlistener = {}, t._schedulerHandler = {}, t._schedulerHandlerOnce = {}, t.extent_onLoad = t.onLoad, t.onLoad = function() {
                        this.onLoadBefore(), this.extent_onLoad(), this.registerListeners()
                    }, t.extent_onDestroy = t.onDestroy, t.onDestroy = function() {
                        this.onDestroyBefore(), this.extent_onDestroy()
                    }, t
                }
                return n.refreshView = function() {}, n.onSetParams = function() {}, n.onLoadBefore = function() {
                    this.removeAllModelListener(), this.onInitModuleEvent()
                }, n.onLoad = function() {
                    this.onLoadBefore()
                }, n.onEnable = function() {}, n.start = function() {}, n.onSchedulerUpdate = function(e) {}, n.onInitModuleEvent = function() {}, n.addSchedulerOnce = function(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.onSchedulerUpdate);
                    var i = this,
                        n = l.instance.schedulerTimeout((function(e) {
                            t.call(i, e, n), i.stopSchedulerOnce(n)
                        }), e);
                    return this._schedulerHandlerOnce[n] = !0, n
                }, n.stopSchedulerOnce = function(e) {
                    l.instance.unscheduleTimeout(e), null != e && 1 == this._schedulerHandlerOnce[e] && (this._schedulerHandlerOnce[e] = null)
                }, n.addScheduler = function(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.onSchedulerUpdate);
                    var i = this,
                        n = l.instance.schedulerInterval((function(e, a) {
                            t.call(i, e, n)
                        }), e);
                    return this._schedulerHandler[n] = !0, n
                }, n.stopScheduler = function(e) {
                    e && (l.instance.unscheduleInterval(e), 1 == this._schedulerHandler[e] && (this._schedulerHandler[e] = null))
                }, n.stopAllScheduler = function() {
                    for (var e in this._schedulerHandler) Object.prototype.hasOwnProperty.call(this._schedulerHandler, e) && this.stopScheduler(Number(e));
                    for (var t in this._schedulerHandlerOnce) Object.prototype.hasOwnProperty.call(this._schedulerHandlerOnce, t) && this.stopSchedulerOnce(Number(t))
                }, n.addModelListener = function(e, t, i) {
                    null != e && null != t && (this.removeModelListener(e), this._Eventlistener[e] = e, s.addListener(e, t, this, i))
                }, n.registerListeners = function() {
                    if (Object.keys(this.event_defents).length > 0) {
                        var e = null;
                        for (var t in this.event_defents) "string" == typeof(e = this.event_defents[t]) ? this.addModelListener(t, this[e]) : e.call && this.addModelListener(t, this[e.call], e.property)
                    }
                }, n.dispatchEvent = function(e) {
                    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    s.dispatch.apply(s, [e].concat(i))
                }, n.removeModelListener = function(e) {
                    null != e && this._Eventlistener[e] && (s.removeListener(e, this), this._Eventlistener[e] = null)
                }, n.removeAllModelListener = function() {
                    for (var e in this._Eventlistener) Object.prototype.hasOwnProperty.call(this._Eventlistener, e) && this.removeModelListener(e);
                    this._Eventlistener = {}
                }, n.removePreLoadMap = function() {
                    this.preLoadMap.forEach((function(e, t) {
                        c.getInstance().removePreLoaderRecord(t)
                    })), this.preLoadMap.clear()
                }, n.onDestroyBefore = function() {
                    this.stopAllScheduler(), this.removeAllModelListener(), this.removePreLoadMap(), this.releasePrefab(), this.event_defents = {}
                }, n.releasePrefab = function() {}, n.releaseBundle = function() {}, n.onDestroy = function() {
                    this.onDestroyBefore()
                }, n.resetLoadMap = function(e) {
                    this.preLoadMap && (this.preLoadMap.delete(e), this.preLoadMap.set(e, !0))
                }, n.getPreLoaderRes = function(e, t, i, n, a, o) {
                    if (void 0 === i && (i = null), void 0 === n && (n = null), void 0 === a && (a = !1), void 0 === o && (o = !1), t) {
                        var r = this;
                        c.getInstance().getPreLoaderRes(e, t, i, (function(e, t) {
                            r.node && 1 == r.node.isValid && (e ? (r.resetLoadMap(t), n && n(e)) : o && n && n())
                        }), a, o)
                    } else o && n && n()
                }, n.getPreLoaderResource = function(e, t, i, n) {
                    var a = this;
                    if (void 0 === i && (i = null), void 0 === n && (n = null), t) {
                        var o = this;
                        c.getInstance().getPreLoaderResource(e, t, i, (function(e, t) {
                            o.node && o.node && 1 == o.node.isValid && (a.resetLoadMap(t), n && n(e))
                        }))
                    }
                }, n.getPreLoaderArrayRes = function(e, t, i) {
                    var n = this;
                    void 0 === t && (t = null), void 0 === i && (i = !1), e.length && function i(a, o) {
                        var r = e[a],
                            s = r.ddzRes,
                            l = a;
                        c.getInstance().getPreLoaderRes(s.bundle, s.path, r.resType, (function(a, r) {
                            n.resetLoadMap(r), ++l < e.length ? i(l, o) : t && t()
                        }), o)
                    }(0, i)
                }, n.getPreLoaderRemoteRes = function(e, t, i, n) {
                    var a = this;
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = !1), e) {
                        var o = this;
                        c.getInstance().getPreLoaderRemoteRes(e, t, (function(e, t) {
                            o && o.node && 1 == o.node.isValid && (a.resetLoadMap(t), i && i(e))
                        }), n)
                    }
                }, n.print = function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    r.logView(5, t)
                }, i(a, [{
                    key: "params",
                    get: function() {
                        return this._params
                    },
                    set: function(e) {
                        this._params = e, this.onSetParams()
                    }
                }]), a
            }(o)) || u) || u), n._RF.pop()
        }
    }
}))