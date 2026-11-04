System.register("chunks:///_virtual/ReportController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./ReportConfig.ts", "./index.js", "./Encrypto.ts", "./LocalStorage.ts", "./EventManager.ts", "./HttpRequest.ts", "./NetState.ts", "./BaseController.ts", "./Platform.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g, E, v, T, R;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GameConfig
        }, function(e) {
            o = e.Logger
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            l = e.StoreKey, u = e.GConstants
        }, function(e) {
            d = e.ReportConfig, _ = e.InteractionEvent
        }, function(e) {
            h = e.SDK
        }, function(e) {
            p = e.Encrypt
        }, function(e) {
            f = e.LocalStorage
        }, function(e) {
            m = e.EventManager
        }, function(e) {
            g = e.HttpRequest
        }, function(e) {
            E = e.Network, v = e.NetworkState
        }, function(e) {
            T = e.BaseController
        }, function(e) {
            R = e.Platform
        }],
        execute: function() {
            i._RF.push({}, "ca027BrsbdCZKDj4y1vEkvC", "ReportController", void 0), h.setRequestConcurrency(10);
            var P = e("ReportController", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._maxSize = 50, t._tempClientClickList = [], t._clickKeys = new Set, t._lastReportTime = 0, t._reportTimeSpance = void 0, t._reportRows = 0, t._maxRows = 200, t._tempId = "34883222", t.reportLog = null, t.sdkReportLog = null, t.openId = null, t.interaction = new Map, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("ReportController")), this._instance.updateLoggerReportInfo(), this._instance.getReportLog(), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this.initSDK(), this._instance = null, i.getInstance()
                };
                var T = i.prototype;
                return T.onInitModuleEvent = function() {
                    this.addModelListener(c.LOGIN_STATE_CHANGE, this.updateLoggerReportInfo), this.addModelListener(c.REPORT_CLIENT_CLICK, this.reqReportClick), this.addModelListener(c.REPORT_RESP_CLIENT_CLICK, this.respReportClick), this.addModelListener(c.NET_REQ_REPORT_TX_GD, this.reqTXGDReport), this.addModelListener(c.EVENT_SET_SDK_OPENID, this.setTXGDSDKOpenid), this.addModelListener(c.NET_REQ_REPORT_TX_GD_SDK, this.reqTXGDSDKReport), this.addModelListener(c.EVENT_REINIT_REPORT_SDK, this.reInitSDK), this.addModelListener(c.NOTIFY_PAY_SUCCESS, this.respPayOrder), this.addModelListener(c.REPORT_USER_INTERACTION, this.reportInteraction)
                }, T.getReportLog = function() {
                    var e = f.get(l.REPORT_LOG, "");
                    r.string_isEmpty(e) ? this.reportLog = {} : this.reportLog = p.JsonDecode(e);
                    var t = f.get(l.SDK_REPORT_LOG, "");
                    r.string_isEmpty(t) ? this.sdkReportLog = {} : this.sdkReportLog = p.JsonDecode(t), console.log("腾讯广告上报日志getReportLog", this.reportLog, this.sdkReportLog)
                }, T.reInitSDK = function() {
                    console.log("腾讯广告SDK reInitSDK", Number(n.deviceInfo.user_action_set_id), n.deviceInfo.secret_key, i._user_action_set_id, i._secret_key), Number(n.deviceInfo.user_action_set_id) > 0 && n.deviceInfo.secret_key.length > 0 && (n.deviceInfo.user_action_set_id != i._user_action_set_id || n.deviceInfo.secret_key != i._secret_key) && i.initSDK()
                }, i.initSDK = function() {
                    if (R.isWXPlatform()) {
                        console.log("ClientInfo", n.WX_AppID, n.deviceInfo.user_action_set_id, n.deviceInfo.secret_key);
                        var e = n.deviceInfo.user_action_set_id,
                            t = n.deviceInfo.secret_key;
                        if (console.log("腾讯广告SDK initSDK ClientInfo", n.WX_AppID, n.deviceInfo.user_action_set_id, n.deviceInfo.secret_key, i._user_action_set_id, i._secret_key), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                eventID: d.txgg_report_90024,
                                body: {
                                    user_action_set_id: e,
                                    secret_key: t,
                                    _user_action_set_id: i._user_action_set_id,
                                    _secret_key: i._secret_key
                                },
                                isFouce: !0
                            }), i._user_action_set_id = e, i._secret_key = t, e > 0 && t.length > 0) try {
                            this.sdk = new h({
                                user_action_set_id: e,
                                secret_key: t,
                                appid: n.WX_AppID
                            })
                        } catch (i) {
                            console.error(i), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                eventID: d.txgg_report_90026,
                                body: {
                                    reportType: "init_sdk",
                                    error: i,
                                    user_action_set_id: e,
                                    secret_key: t
                                },
                                isFouce: !0
                            })
                        }
                    }
                }, T.respPayOrder = function(e, t) {
                    console.log("支付订单成功", t);
                    var i = s.User.getUserMid(),
                        n = R.getUserTraceId();
                    m.dispatch(c.REPORT_CLIENT_CLICK, {
                        eventID: d.user_pay,
                        body: {
                            userId: i,
                            param: t,
                            userTraceId: n
                        },
                        isFouce: !0
                    }), n && m.dispatch(c.NET_REQ_REPORT_TX_GD, u.TXGDActionType.PURCHASE, {
                        orderID: t.detailData.orderNo || 0,
                        pamount: t.detailData.amount || 0
                    }), m.dispatch(c.NET_REQ_REPORT_TX_GD_SDK, u.TXGDActionType.PURCHASE, {
                        orderID: t.detailData.orderNo || 0,
                        pamount: t.detailData.amount || 0
                    })
                }, T.updateLoggerReportInfo = function() {
                    var e = null;
                    R.ClientPlatform, R.SDKVersion, s && s.User && (e = s.User.getUserMid());
                    var t = "[HallVer:" + n.HallVer + ",Uid:" + e + "]";
                    o.ReportConf.BaseInfo = t
                }, T.reqReportClick = function(e, t) {
                    if (1 != r.table_isEmpty(t) && null != t.eventID && !r.string_isEmpty(t.eventID)) {
                        var i = Number(t.eventID),
                            n = this.__genPackageBody(i, t.body);
                        if (n.act_id && n.lts_at) {
                            var a = n.act_id + "_" + n.lts_at;
                            if (this._clickKeys.has(a)) console.log("重复上报数据", n);
                            else {
                                if (this._clickKeys.add(a), this._tempClientClickList.push(n), 0 == this.__checkCanReport(t.isFouce) && this._tempClientClickList.length < this._maxSize) return;
                                this.__startReport()
                            }
                        }
                    }
                }, T.respReportClick = function(e, t, i, n) {
                    t ? (this._lastReportTime = r.timeEx(), this.removeReportedData(this._reportRows), console.log("上报成功:", n, i)) : console.log("上报失败:", n, i)
                }, T.__startReport = function() {
                    var e = this._tempClientClickList.length >= this._maxSize ? this._maxSize : this._tempClientClickList.length,
                        t = this._tempClientClickList.slice(0, e);
                    if (!(t.length <= 0))
                        if (t.length > this._maxRows) this.removeReportedData(t.length);
                        else {
                            this._reportRows = t.length;
                            var i = s.User.getUserAppID(),
                                n = {
                                    list: p.JsonEncode(t),
                                    appid: i
                                };
                            this.reportByHttp(n.list)
                        }
                }, T.removeReportedData = function(e) {
                    var t, i = this,
                        n = this._tempClientClickList.splice(0, e);
                    (null == (t = n) ? void 0 : t.length) > 0 && n.forEach((function(e) {
                        if (e.act_id && e.lts_at) {
                            var t = e.act_id + "_" + e.lts_at;
                            i._clickKeys.delete(t)
                        }
                    })), n = null
                }, T.__checkCanReport = function(e) {
                    return void 0 === e && (e = !1), !(0 == this._tempClientClickList.length || E.getInstance().state != v.ONLINE || 0 == e && this._tempClientClickList.length < this._maxSize || 0 != this._lastReportTime && r.timeEx() - this._lastReportTime < this._reportTimeSpance)
                }, T.__genPackageBody = function(e, t) {
                    void 0 === t && (t = null);
                    var i = {
                        act_id: e,
                        lts_at: r.time()
                    };
                    return 0 == r.table_isEmpty(t) && (i.gsubname = p.JsonEncode(t)), i
                }, T.reqTXGDReport = function(e, t, i) {
                    if (null != n.deviceInfo.Txgg_Account_Id) {
                        var a = t || "";
                        console.log("腾讯广告数据上报", a, i, n.deviceInfo.Txgg_Account_Id, n.deviceInfo.Txgg_Action_Set_Id);
                        var _ = s.User.getUserMid(),
                            h = (new Date).getTime(),
                            g = f.get(l.USER_TRACE_ID, null);
                        if (m.dispatch(c.REPORT_CLIENT_CLICK, {
                                eventID: d.txgg_report_1,
                                body: {
                                    userId: _,
                                    _actionType: "_actionType",
                                    timeEx: h,
                                    traceId: g,
                                    param: i
                                },
                                isFouce: !0
                            }), g) {
                            if (a == u.TXGDActionType.REGISTER || a == u.TXGDActionType.CREATE_ROLE || a == u.TXGDActionType.ONE_DAY_LEAVE) {
                                var E = !1;
                                if (this.reportLog[a] && (E = !0), E) return;
                                this.reportLog[a] = !0, f.set(l.REPORT_LOG, p.JsonEncode(this.reportLog))
                            }
                            console.log("腾讯广告数据上报3", a, this.reportLog);
                            var v = r.time(),
                                T = _ + "_" + a + "_" + v,
                                P = {
                                    account_id: n.deviceInfo.Txgg_Account_Id || 34211454,
                                    user_action_set_id: n.deviceInfo.Txgg_Action_Set_Id || 1202025180,
                                    actions: [{
                                        outer_action_id: T,
                                        action_time: v,
                                        user_id: {
                                            wechat_app_id: n.WX_AppID,
                                            wechat_openid: R.PLogInfo && R.PLogInfo.openId || ""
                                        },
                                        action_type: a
                                    }]
                                };
                            a === u.TXGDActionType.PURCHASE && (P.actions[0].action_param = {
                                value: 100 * Number(i.pamount)
                            }), console.log("腾讯广告数据上报traceId", g, a, i, P), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                eventID: d.txgg_report_4,
                                body: {
                                    reportType: _ + "_api",
                                    reportKey: _ + "_" + a,
                                    userId: _,
                                    traceId: g,
                                    data: P,
                                    param: i
                                },
                                isFouce: !0
                            }), R.request("https://api.e.qq.com/v3.0/user_actions/add", P, (function(e) {
                                if (0 == e.data.code) {
                                    o.logPlatform("Success:腾讯广告数据上报成功", e), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                        eventID: d.txgg_report_2,
                                        body: {
                                            reportType: _ + "_api",
                                            reportKey: _ + "_" + a,
                                            userId: _,
                                            traceId: g,
                                            data: P,
                                            res: e,
                                            result: "Success"
                                        },
                                        isFouce: !0
                                    });
                                    var t = 90020;
                                    a == u.TXGDActionType.REGISTER ? t = d.txgg_report_90005 : a == u.TXGDActionType.CREATE_ROLE ? t = d.txgg_report_90006 : a == u.TXGDActionType.ONE_DAY_LEAVE ? t = d.txgg_report_90007 : a == u.TXGDActionType.PURCHASE ? t = d.txgg_report_90008 : a == u.TXGDActionType.RE_ACTIVE && (t = d.txgg_report_90009), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                        eventID: t,
                                        body: {
                                            reportType: _ + "_api",
                                            reportKey: _ + "_" + a,
                                            userId: _,
                                            traceId: g,
                                            data: P,
                                            param: i,
                                            res: e,
                                            result: "Success"
                                        },
                                        isFouce: !0
                                    })
                                } else o.logPlatform("Fail:腾讯广告数据上报", e), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                    eventID: d.txgg_report_3,
                                    body: {
                                        reportType: _ + "_api",
                                        reportKey: _ + "_" + a,
                                        userId: _,
                                        traceId: g,
                                        data: P,
                                        param: i,
                                        res: e,
                                        result: "Fail"
                                    },
                                    isFouce: !0
                                })
                            }), (function(e) {
                                o.logPlatform("Fail:腾讯广告数据上报", e), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                    eventID: d.txgg_report_3,
                                    body: {
                                        reportType: _ + "_api",
                                        reportKey: _ + "_" + a,
                                        userId: _,
                                        traceId: g,
                                        data: P,
                                        param: i,
                                        res: e,
                                        result: "Fail"
                                    },
                                    isFouce: !0
                                })
                            }), (function(e) {
                                console.log("compres", e)
                            }), {
                                "Content-Type": "application/json",
                                "cache-control": "no-cache",
                                "access-token": n.deviceInfo.access_token,
                                timestamp: v,
                                nonce: T
                            }, 6e3, "POST", "json", "text")
                        }
                    }
                }, T.reportByHttp = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = s.User.getUserMid();
                    i || (i = s.User.getLastlocalMid() || this._tempId);
                    var o = {
                            action: "report.userPortrait",
                            appid: n.PlatFormAppID,
                            mid: i,
                            ssid: s.User.getDataUser("ssid", ""),
                            hallVer: n.HallVer,
                            list: e
                        },
                        c = this;
                    (new g).post(a.instance.AppUrlConf.Web, JSON.stringify(o), (function(e) {
                        var i = p.JsonDecode(e);
                        t ? (console.log("点击事件上报：", i), c._lastReportTime = r.timeEx(), c.removeReportedData(c._reportRows)) : console.log("用户行为上报", i)
                    }))
                }, T.setTXGDSDKOpenid = function(e, t) {
                    if (R.isWXPlatform() && (this.openId != t || !i.sdk)) {
                        this.openId = t;
                        var n = s.User.getUserMid();
                        console.log("腾讯广告SDK clientInfo openid 11", t), m.dispatch(c.REPORT_CLIENT_CLICK, {
                            eventID: d.txgg_report_90020,
                            body: {
                                userId: n,
                                openid: t,
                                "ReportController.sdk": !i.sdk
                            },
                            isFouce: !0
                        }), i.sdk || i.initSDK(), m.dispatch(c.REPORT_CLIENT_CLICK, {
                            eventID: d.txgg_report_90025,
                            body: {
                                userId: n,
                                openid: t,
                                "ReportController.sdk": !i.sdk
                            },
                            isFouce: !0
                        }), t && i.sdk && (i.sdk.setOpenId(t), console.log("腾讯广告SDK clientInfo openid 22", t))
                    }
                }, T.reqTXGDSDKReport = function(e, t, a) {
                    if (R.isWXPlatform()) {
                        var o = f.get(l.USER_TRACE_ID, null),
                            r = s.User.getUserMid(),
                            _ = (new Date).getTime();
                        if (m.dispatch(c.REPORT_CLIENT_CLICK, {
                                eventID: d.txgg_report_90021,
                                body: {
                                    reportType: r + "_sdk",
                                    reportKey: r + "_" + t,
                                    userId: r,
                                    _actionType: t,
                                    param: a,
                                    timeEx: _,
                                    traceId: o,
                                    user_action_set_id: n.deviceInfo.user_action_set_id,
                                    secret_key: n.deviceInfo.secret_key,
                                    "ReportController.sdk": !i.sdk,
                                    sdkReportLog: this.sdkReportLog
                                },
                                isFouce: !0
                            }), console.log("腾讯广告SDK数据上报1", t, a, n.deviceInfo.user_action_set_id, n.deviceInfo.secret_key), n.deviceInfo.user_action_set_id && n.deviceInfo.secret_key && i.sdk) {
                            var h = t || "";
                            if (h == u.TXGDActionType.REGISTER || h == u.TXGDActionType.CREATE_ROLE || h == u.TXGDActionType.ONE_DAY_LEAVE) {
                                var g = !1;
                                if (this.sdkReportLog[h] && (g = !0), g) return;
                                this.sdkReportLog[h] = !0, f.set(l.SDK_REPORT_LOG, p.JsonEncode(this.sdkReportLog))
                            }
                            console.log("腾讯广告SDK数据上报3", h, this.sdkReportLog), "REGISTER" == h ? i.sdk.onRegister() : "CREATE_ROLE" == h ? i.sdk.onCreateRole(s.User.getUserName()) : "PURCHASE" == h ? i.sdk.onPurchase(100 * a.pamount || 0) : "ADD_TO_WISHLIST" == h ? i.sdk.track("ADD_TO_WISHLIST", a || {
                                type: "default"
                            }) : "SHARE" == h ? i.sdk.track("SHARE", a || {
                                target: "APP_MESSAGE"
                            }) : i.sdk.track(h), console.log("腾讯广告SDK数据上报2", h, a, n.deviceInfo.user_action_set_id, n.deviceInfo.secret_key), m.dispatch(c.REPORT_CLIENT_CLICK, {
                                eventID: d.txgg_report_90023,
                                body: {
                                    reportType: r + "_sdk",
                                    reportKey: r + "_" + h,
                                    userId: r,
                                    _actionType: t,
                                    param: a,
                                    timeEx: _,
                                    traceId: o
                                },
                                isFouce: !0
                            })
                        }
                    }
                }, T.reportInteraction = function(e, t) {
                    var i = _[null == t ? void 0 : t.eventID];
                    if (i) {
                        if (this.interaction.has(i)) return;
                        this.interaction.set(i, t.data);
                        var n = p.JsonEncode([{
                            act_id: i,
                            lts_at: r.time(),
                            gsubname: p.JsonEncode(t.data || {})
                        }]);
                        this.reportByHttp(n, !1)
                    }
                }, i
            }(T));
            P._instance = null, P.sdk = void 0, P._user_action_set_id = 0, P._secret_key = "", i._RF.pop()
        }
    }
}))