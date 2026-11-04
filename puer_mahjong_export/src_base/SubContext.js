System.register("chunks:///_virtual/SubContext.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./AppEvent.ts", "./EventManager.ts", "./NetState.ts", "./BaseCache.ts", "./Platform.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.assertThisInitialized
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.APPState
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.EventManager
        }, function(e) {
            s = e.Network, c = e.NetworkState
        }, function(e) {
            l = e.BaseCache
        }, function(e) {
            u = e.Platform
        }],
        execute: function() {
            n._RF.push({}, "bd55ayzzbtDpp50lZYLFRvI", "SubContext", void 0), e("SubContext", function(e) {
                function n(t) {
                    var n;
                    return (n = e.call(this, "SubContext") || this).subContextList = [], n.scenes = [], r.addListener(o.SYS_SHOW_OR_HIDE, n.processApplicationActions, i(n)), r.addListener(o.SYS_NET_CHANGE_STATE, n.networkChange, i(n)), n
                }
                t(n, e);
                var l = n.prototype;
                return l.processApplicationActions = function(e, t) {
                    t == a.SHOW ? this._showSubContext() : t == a.HIDE && this._hidSubContext()
                }, l.networkChange = function(e) {
                    u.isIOS() && (s.getInstance().state == c.OFFLINE ? this._hidSubContext() : s.getInstance().state == c.ONLINE && this._showSubContext())
                }, l._showSubContext = function() {
                    var e;
                    if ((null == (e = this.subContextList) ? void 0 : e.length) > 0) {
                        var t = this.subContextList[0];
                        r.dispatch(o.UPDATE_SUBCONTEXT, t, {
                            tag: "show"
                        })
                    }
                }, l._hidSubContext = function() {
                    var e;
                    if ((null == (e = this.subContextList) ? void 0 : e.length) > 0) {
                        var t = this.subContextList[0];
                        r.dispatch(o.UPDATE_SUBCONTEXT, t, {
                            tag: "hide"
                        })
                    }
                }, l._add = function(e) {
                    var t = -1;
                    if (-1 != this.subContextList.indexOf(e.UIKey)) {
                        this._remove(e.UIKey), this.onRemoveScene(e.UIKey);
                        var i = {
                            UIKey: e.UIKey,
                            close: !0
                        };
                        u.postMessage(i)
                    }
                    if (this.subContextList.length > 0) {
                        var n = this.subContextList[0],
                            a = {
                                UIKey: n,
                                close: !0
                            };
                        u.postMessage(a), this._remove(n), r.dispatch(o.UPDATE_SUBCONTEXT, n, {
                            tag: "close"
                        }), t = 20
                    }
                    return this.subContextList.push(e.UIKey), t
                }, l._remove = function(e) {
                    this.subContextList = this.subContextList.filter((function(t) {
                        return t != e
                    }))
                }, l._addcene = function(e) {
                    -1 == this.scenes.indexOf(e) ? this.scenes.push(e) : this.print("")
                }, l.onRemoveScene = function(e, t) {
                    var i = this;
                    void 0 === t && (t = !1), this.scenes = this.scenes.filter((function(t) {
                        return t != e
                    })), t && this.scenes.length > 0 && setTimeout((function() {
                        r.dispatch(o.UPDATE_SUBCONTEXT, i.scenes[i.scenes.length - 1], {
                            tag: "reloadUI"
                        })
                    }), 0)
                }, l.postMessage = function(e) {
                    if (e.preLoad || e.reLoad) u.postMessage(e);
                    else if (e.UIKey) {
                        var t = -1;
                        1 == e.close ? (this._remove(e.UIKey), this.onRemoveScene(e.UIKey, e.recoverLast)) : 1 == e.reloadUI ? (t = this._add(e), this._addcene(e.UIKey)) : 1 == e.enable || 0 == e.enable || 0 == e.init && (t = this._add(e), this._addcene(e.UIKey)), this.print("当前的数据域信息：", this.subContextList, this.scenes), t >= 0 ? setTimeout((function() {
                            u.postMessage(e)
                        }), t) : u.postMessage(e)
                    }
                }, l.getCurrentScene = function() {
                    return this.scenes[this.scenes.length - 1] || null
                }, n
            }(l)), n._RF.pop()
        }
    }
}))