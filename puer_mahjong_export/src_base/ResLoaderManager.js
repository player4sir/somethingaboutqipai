System.register("chunks:///_virtual/ResLoaderManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AppEvent.ts", "./ResLoader.ts", "./BaseController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e._decorator, a = e.Prefab, o = e.instantiate
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.resLoader
        }, function(e) {
            c = e.BaseController
        }],
        execute: function() {
            var l, u;
            i._RF.push({}, "614192N9F5BX6A3Dj9rRt18", "ResLoaderManager", void 0);
            var d = n.ccclass;
            e("ResLoaderManager", d("ResLoaderManager")(((u = function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).__preLoadMap = new Map, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("ResLoaderManager")), s.setMaxConcurrency(6), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var n = i.prototype;
                return n.onInitModuleEvent = function() {
                    this.addModelListener(r.SYS_RELOADD_LOCAL, this.receivePreLoaderRes), this.addModelListener(r.SYS_RELOADD_REMOTE, this.receivePreLoaderRemoteRes), this.addModelListener(r.SYS_RELOADD_RECORD_REMOVE, this.receiveremovePreLoaderRecord)
                }, n.receivePreLoaderRes = function(e, t) {
                    this.getPreLoaderRes(t.bundle, t.path, t.resType, t.callFunc, t.isReload)
                }, n.receivePreLoaderRemoteRes = function(e, t) {
                    this.getPreLoaderRemoteRes(t.path, t.resType, t.callFunc, t.isReload)
                }, n.receiveremovePreLoaderRecord = function(e, t) {
                    this.removePreLoaderRecord(t.bundle, t.path, t.resType)
                }, n.getKey = function(e, t, i) {
                    var n;
                    void 0 === i && (i = null);
                    var a = (e = null != e ? e : "resources") + "|" + t;
                    return null != (n = i) && n.name && (a = a + "|" + i.name), a
                }, n.getPreLoaderRes = function(e, t, i, n, r, c) {
                    if (void 0 === i && (i = null), void 0 === n && (n = null), void 0 === r && (r = !1), void 0 === c && (c = !1), t) {
                        var l = this,
                            u = this.getKey(e, t, i);
                        r && l.__preLoadMap.delete(u);
                        var d = l.__preLoadMap.get(u);
                        null != d && null != d ? n && (i == a ? (n(o(d), u), l.__preLoadMap.delete(u)) : n(d, u)) : i ? s.load(e, t, i, (function(e, t) {
                            if (e) return console.log("ResLoaderManager.getPreLoaderRes 加载失败", e), void(c && n && n());
                            l.__preLoadMap.set(u, t), n && (i == a ? (n(o(t), u), l.__preLoadMap.delete(u)) : n(t, u))
                        })) : s.load(e, t, (function(e, t) {
                            e ? c && n && n() : (l.__preLoadMap.set(u, t), n && (i == a ? (n(o(t), u), l.__preLoadMap.delete(u)) : n(t, u)))
                        }))
                    } else c && n && n()
                }, n.getPreLoaderResource = function(e, t, i, n) {
                    void 0 === n && (n = null), t && s.preload(e, t, i, (function(e, t) {
                        n(e, t)
                    }))
                }, n.getPreLoaderRemoteRes = function(e, t, i, n) {
                    if (void 0 === t && (t = null), void 0 === i && (i = null), void 0 === n && (n = !1), e) {
                        var r = this,
                            c = this.getKey("http", e, t);
                        n && r.__preLoadMap.delete(c);
                        var l = r.__preLoadMap.get(c);
                        null != l && null != l ? i && (t == a ? (i(o(l), c), r.__preLoadMap.delete(c)) : i(l, c)) : t ? s.loadRemote(e, {
                            ext: t
                        }, (function(e, n) {
                            e || (r.__preLoadMap.set(c, n), i && (t == a ? (i(o(n), c), r.__preLoadMap.delete(c)) : i(n, c)))
                        })) : s.loadRemote(e, (function(e, n) {
                            e || (r.__preLoadMap.set(c, n), i && (t == a ? (i(o(n), c), r.__preLoadMap.delete(c)) : i(n, c)))
                        }))
                    }
                }, n.removePreLoaderRecord = function(e, t, i) {
                    void 0 === t && (t = null), void 0 === i && (i = null);
                    var n = null;
                    e && t ? n = this.getKey(e, t, i) : e && null == t && (n = e), n && this.__preLoadMap.delete(n)
                }, i
            }(c))._instance = void 0, l = u)) || l), i._RF.pop()
        }
    }
}))