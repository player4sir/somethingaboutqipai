System.register("chunks:///_virtual/NetState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./AppEvent.ts", "./Platform.ts", "./EventManager.ts"], (function(e) {
    var t, i, n, a, o, r, s, c;
    return {
        setters: [function(e) {
            t = e.createClass
        }, function(e) {
            i = e.cclegacy, n = e.game, a = e.sys
        }, function(e) {
            o = e.Logger
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.Platform
        }, function(e) {
            c = e.EventManager
        }],
        execute: function() {
            var l, u, d;
            e({
                    NetworkEvent: void 0,
                    NetworkState: void 0
                }), i._RF.push({}, "06a3ayfWydC8pY/lWnVtcRP", "NetState", void 0),
                function(e) {
                    e.CHANGE_STATE = "NetworkEvent.CHANGE_STATE", e.CHANGE_NAME = "NetworkEvent.CHANGE_NAME"
                }(u || (u = e("NetworkEvent", {}))),
                function(e) {
                    e.UNKNOWN = "unknown", e.ONLINE = "online", e.OFFLINE = "offline"
                }(d || (d = e("NetworkState", {})));
            var _ = e("NetWorkName", ((l = {}).WIFI = "wifi", l["2G"] = "2g", l["3G"] = "3g", l["4G"] = "4g", l["5G"] = "5g", l.UNKNOWN = "unknown", l.NONE = "none", l));
            e("Network", function() {
                function e() {
                    switch (this._state = d.ONLINE, this._name = _.WIFI, a.platform) {
                        case a.Platform.WECHAT_GAME:
                            this._weixinInit();
                            break;
                        case a.Platform.DESKTOP_BROWSER:
                            this._webInit()
                    }
                    this.initNetWorkState()
                }
                e.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new e), this._instance
                };
                var i = e.prototype;
                return i.changeName = function(e) {
                    if (this._name !== e) {
                        var t = this._name;
                        this._name = e, n.emit(u.CHANGE_NAME, t, this._name), c.dispatch(r.SYS_NETWORKTYPE_CHANGE, t, this._name)
                    } else o.logNet("net---网络状态 未发生改变，不通知业务")
                }, i._webInit = function() {
                    var e = this,
                        t = window,
                        i = document.body;
                    i.addEventListener ? (t.addEventListener("online", (function() {
                        e._callbackNetworkState(!0)
                    }), !0), t.addEventListener("offline", (function() {
                        e._callbackNetworkState(!1)
                    }), !0)) : i.attachEvent ? (t.attachEvent("ononline", (function() {
                        e._callbackNetworkState(!0)
                    })), t.attachEvent("onoffline", (function() {
                        e._callbackNetworkState(!1)
                    }))) : (t.ononline = function() {
                        e._callbackNetworkState(!0)
                    }, t.onoffline = function() {
                        e._callbackNetworkState(!1)
                    }), a.isMobile || (window.onLineHandler = function() {
                        e._callbackNetworkState(!0)
                    }, window.offLineHandler = function() {
                        e._callbackNetworkState(!1)
                    })
                }, i._weixinInit = function() {
                    var e = this;
                    s.regWxNetWorkCallback((function(t) {
                        o.logNet("net---网络状态改变：", t), t && t.networkType ? e._callbackNetworkName(t.networkType) : e._callbackNetworkName(_.UNKNOWN), t && 1 == t.isConnected ? e._callbackNetworkState(!0) : e._callbackNetworkState(!1)
                    }))
                }, i.initNetWorkState = function() {
                    var e = this,
                        t = this;
                    s.updateNetWorkType((function() {
                        switch (s.NetWorkType) {
                            case -1:
                                t._callbackNetworkName(_.NONE), t._callbackNetworkState(!1);
                                break;
                            case 1:
                                t._callbackNetworkName(_.WIFI), t._callbackNetworkState(!0);
                                break;
                            case 2:
                                t._callbackNetworkName(_["2G"]), t._callbackNetworkState(!0);
                                break;
                            case 3:
                                t._callbackNetworkName(_["3G"]), t._callbackNetworkState(!0);
                                break;
                            case 4:
                                t._callbackNetworkName(_["4G"]), t._callbackNetworkState(!0);
                                break;
                            case 5:
                                t._callbackNetworkName(_["5G"]), t._callbackNetworkState(!0);
                                break;
                            case 6:
                                t._callbackNetworkName(_.UNKNOWN), t._callbackNetworkState(!0)
                        }
                    }), (function(t) {
                        e.updateNetState(t)
                    }))
                }, i._callbackNetworkState = function(e) {
                    e ? (this.state = d.ONLINE, o.ReportConf.isCanReport = !0) : (this.state = d.OFFLINE, o.ReportConf.isCanReport = !1)
                }, i.updateNetState = function(e) {
                    o.logNet("socket-------------updateNetState"), this._callbackNetworkState(e)
                }, i._callbackNetworkName = function(e) {
                    this.changeName(e)
                }, t(e, [{
                    key: "state",
                    get: function() {
                        return this._state
                    },
                    set: function(e) {
                        this._state === e && e != d.ONLINE || (this._state = e, n.emit(u.CHANGE_STATE))
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    },
                    set: function(e) {
                        this._name = e || _.UNKNOWN
                    }
                }]), e
            }())._instance = null, i._RF.pop()
        }
    }
}))