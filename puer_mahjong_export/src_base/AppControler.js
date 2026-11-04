System.register("chunks:///_virtual/AppControler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./ReportConfig.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./Platform.ts", "./GlobalCmd.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy, n = e.screen, a = e.view
        }, function(e) {
            o = e.ClientInfo
        }, function(e) {
            r = e.GCache
        }, function(e) {
            s = e.AppEvent
        }, function(e) {
            c = e.GConstants
        }, function(e) {
            l = e.ReportConfig
        }, function(e) {
            u = e.UIID
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            _ = e.BaseController
        }, function(e) {
            h = e.Platform
        }, function(e) {
            p = e.GlobalCmdHeadPHP
        }, function(e) {
            f = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "9d021IYqqZL0aIZmSbNKNqy", "AppControler", void 0), e("AppControler", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._topBarRect = {}, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("AppControler")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var _ = i.prototype;
                return _.onInitModuleEvent = function() {
                    this.addModelListener(s.UPDATE_USER_PROPERTY, this.onUpdateProperty), this.addModelListener(s.REPORT_CLICK_EVENT, this.reportClick)
                }, _.showToast = function(e, t, i) {
                    if (void 0 === t && (t = 0), void 0 === i && (i = !1), (!i || 0 != o.DEBUG) && e && e.length > 0) {
                        var n = {
                            content: e
                        };
                        0 != t && (n.timeOut = t), d.dispatch(s.SYS_TOAST_TIP, n)
                    }
                }, _.hideToast = function() {
                    d.dispatch(s.SYS_CLOSE_TOAST_TIP)
                }, _.updateWxLoginBtn = function(e, t) {
                    if (void 0 === t && (t = !1), h.isWXPlatform()) {
                        if (1 == e && 1 == r.User.isLoginSuccesed()) return void console.log("微信登录按钮---已登录");
                        h.updateWxAuthSettingButtonVisible(e, t)
                    }
                }, _.showCommonDialog = function(e) {
                    null != e && f.getInstance().onOpenView("", u.PopWindow, e)
                }, _.refreshProperty = function() {
                    var e = {
                        cmd: p.PHP_GET_USERINFO,
                        body: {
                            cid: r.User.getUserCid(),
                            mid: r.User.getUserMid(),
                            fields: "money,silver"
                        }
                    };
                    d.dispatch(s.NET_SEND_MSG, e)
                }, _.onUpdateProperty = function(e, t, i) {
                    if (t && i && i.money) {
                        var n = r.User.getUserMoneyByID(c.PropertyType.SILVER_COIN);
                        i.money != n && r.User.updateUserMoneyByID(0, i.money), r.User.setDataBrokenMoney(i.broken_money)
                    }
                }, _.getTopBarRect = function(e) {
                    if (void 0 === e && (e = null), null != h.SystemInfo && (e = e || h.orientation)) {
                        n.windowSize.height;
                        var t = n.windowSize.width,
                            i = h.getTopMenuRect();
                        if (i) {
                            var o = n.devicePixelRatio,
                                r = a.getScaleX(),
                                s = a.getScaleY();
                            console.log("工具栏---screen.windowSize=" + n.windowSize + ",ratio=" + o + ",scaleX=" + r + ",scaleY=" + s + ",rect=" + i);
                            var c = {
                                top: i.top * o / s,
                                right: (t - i.left * o) / r,
                                width: i.width * o / r,
                                height: i.height * o / s
                            };
                            return "portrait" == e ? c.top = c.top > 100 ? 100 : c.top : "landscape" == e && (c.top = c.top > 25 ? 25 : c.top), this._topBarRect[e] = c, console.log("工具栏---info", e, c), c
                        }
                    }
                }, _.reportClick = function(e, t) {
                    this.reportClickEvent(t.eventID, t.body, t.isFouce)
                }, _.reportClickEvent = function(e, t, i) {
                    void 0 === t && (t = {}), void 0 === i && (i = !1), e && l[e] && d.dispatch(s.REPORT_CLIENT_CLICK, {
                        eventID: l[e],
                        body: t,
                        isFouce: i
                    })
                }, i
            }(_))._instance = null, i._RF.pop()
        }
    }
}))