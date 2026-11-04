System.register("chunks:///_virtual/ShareController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameConfig.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./Md5.ts", "./EventManager.ts", "./HttpRequest.ts", "./BaseController.ts", "./Platform.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p, f, m, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GameConfig, o = e.APPState
        }, function(e) {
            r = e.Utils
        }, function(e) {
            s = e.GCache
        }, function(e) {
            c = e.AppEvent
        }, function(e) {
            l = e.GConstants
        }, function(e) {
            u = e.UIID
        }, function(e) {
            d = e.Encrypt
        }, function(e) {
            _ = e.Md5
        }, function(e) {
            h = e.EventManager
        }, function(e) {
            p = e.HttpRequest
        }, function(e) {
            f = e.BaseController
        }, function(e) {
            m = e.Platform
        }, function(e) {
            g = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "6e118mxQLpGopQ4NF1p67JL", "ShareController", void 0), e("ShareController", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, t) || this).startShareTime = 0, i.shareCallBackData = void 0, i.shareReqData = void 0, i.shareHandler = void 0, i.resultCallBack = void 0, i
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("ShareController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var f = i.prototype;
                return f.onInitModuleEvent = function() {
                    this.addModelListener(c.NET_REQ_SHARE_CONFIG, this.reqShareConfig), this.addModelListener(c.NET_RESP_SHARE_CONFIG, this.respShareConfig), this.addModelListener(c.NET_REQ_SHARE_AWARD, this.reqShareAward), this.addModelListener(c.NET_REQ_ADS_AWARD, this.reqADSAWard), this.addModelListener(c.NET_RESP_ADS_AWARD, this.respADSAWard), this.addModelListener(c.NET_REQ_NEW_SHARE_REPORT, this.reqShareReport), this.addModelListener(c.NET_REQ_NEW_VDIEO_REPORT, this.reqVideoAdReport), this.addModelListener(c.EVENT_REQ_WXIN_SHARE, this.onReqWxinShare), this.addModelListener(c.SYS_SHOW_OR_HIDE, this.processApplicationActions)
                }, f.reqShareConfig = function(e) {
                    var t = new p,
                        i = {
                            action: l.ReqUrl.shopShareUrl,
                            ssid: s.User.getDataUser("ssid", ""),
                            appid: n.PlatFormAppID
                        };
                    t.post(a.instance.AppUrlConf.Web, JSON.stringify(i), (function(e) {
                        var t = r.nullToDefault(d.JsonDecode(e), {
                            result: {}
                        });
                        s.ShareInfo.updateConfig(t.result), r.table_isEmpty(t)
                    }))
                }, f.respShareConfig = function(e, t, i, n) {
                    this.print("请求分享配置返回", t, i)
                }, f.reqShareAward = function(e, t, i, o) {
                    var u = this;
                    if (void 0 === o && (o = !1), console.log("执行请求分享领奖"), null != t) {
                        var f = new p,
                            m = "123!@#*&908byaa" + i + t + n.PlatFormAppID + s.User.getUserMid(),
                            g = {
                                action: l.ReqUrl.shareCBUrl,
                                appid: n.PlatFormAppID,
                                mid: s.User.getUserMid(),
                                ssid: s.User.getDataUser("ssid", ""),
                                hallVer: n.HallVer,
                                type: i,
                                mark: _(m)
                            };
                        o ? g.goods_id = t : g.share_id = t, f.post(a.instance.AppUrlConf.Web, JSON.stringify(g), (function(e) {
                            var t = d.JsonDecode(e);
                            t = r.table_verify(t);
                            var i = !r.table_isEmpty(t.result);
                            console.log("请求分享领奖返回值", e, i, t), u.respShareAward(i, t, g), h.dispatch(c.NET_RESP_SHARE_AWARD, i, t, g)
                        }))
                    }
                }, f.respShareAward = function(e, t, i) {
                    if (0 == e) {
                        var n = t.error ? t.error : "分享失败请联系客服";
                        return this.print("请求分享失败", e, n), void h.dispatch(c.SYS_TOAST_TIP, {
                            content: n
                        })
                    }
                    t.result = r.table_verify(t.result), t.result.reward = r.table_verify(t.result.reward, !0), this.print("请求分享成功返回", i, t.result), g.getInstance().onOpenView("", u.GetPropPrefab, t.result.reward), t.result.reward.forEach((function(e) {
                        var t = Number(e.type),
                            i = 0;
                        if (null != r.table_keyof(l.PropertyType, t)) {
                            var n = s.User.getUserMoneyByID(t);
                            s.User.updateUserMoneyByID(t, n + Number(e.num))
                        } else i += 1;
                        i > 0 && h.dispatch(c.NET_CMD_REQ_USER_BACKPACK)
                    })), s.ShopInfo.onUpdateGoods(i.goods_id, t.result), s.ShareInfo.shareSuccessTimeAdd(i.goods_id)
                }, f.reqADSAWard = function(e, t, i, o) {
                    if (void 0 === o && (o = !1), null != t) {
                        var u = new p,
                            f = "123!@#*&908byaa" + i + t + n.PlatFormAppID + s.User.getUserMid(),
                            m = {
                                action: l.ReqUrl.shareCBUrl,
                                appid: n.PlatFormAppID,
                                mid: s.User.getUserMid(),
                                ssid: s.User.getDataUser("ssid", ""),
                                hallVer: n.HallVer,
                                type: i,
                                mark: _(f)
                            };
                        o ? m.goods_id = t : m.share_id = t, u.post(a.instance.AppUrlConf.Web, JSON.stringify(m), (function(e) {
                            var t = d.JsonDecode(e);
                            t = r.table_verify(t), console.log("请求看视频http", t);
                            var i = 1 != r.table_isEmpty(t.result);
                            h.dispatch(c.NET_RESP_ADS_AWARD, i, t, m)
                        }))
                    }
                }, f.respADSAWard = function(e, t, i, n) {
                    console.log("请求看视频数据返回", t, i, n), 0 != t ? (g.getInstance().onOpenView("", u.GetPropPrefab, i.result.reward), i.result.reward.forEach((function(e) {
                        var t = Number(e.type),
                            i = 0;
                        if (null != r.table_keyof(l.PropertyType, t)) {
                            var n = s.User.getUserMoneyByID(t);
                            s.User.updateUserMoneyByID(t, n + Number(e.num))
                        } else i += 1;
                        i > 0 && h.dispatch(c.NET_CMD_REQ_USER_BACKPACK)
                    })), s.ShopInfo.onUpdateGoods(n.goods_id, i.result)) : h.dispatch(c.SYS_TOAST_TIP, {
                        content: (null == i ? void 0 : i.error) || "请勿频繁点击"
                    })
                }, f.reqShareReport = function(e, t) {
                    this.onShareAppMessage(t)
                }, f.onShareAppMessage = function(e) {
                    var t = new p,
                        i = {
                            action: l.ReqUrl.newShareReportUrl,
                            app: n.PlatFormAppID,
                            mid: s.User.getUserMid(),
                            ssid: s.User.getDataUser("ssid", ""),
                            hallVer: n.HallVer
                        };
                    e && e.scene && (i.scene = e.scene), console.log("分享-------------上报分享结果", i), t.post(a.instance.AppUrlConf.Web, JSON.stringify(i), (function(e) {
                        var t = d.JsonDecode(e);
                        t = r.table_verify(t);
                        var i = !r.table_isEmpty(t.result);
                        console.log("请求新版分享上报（活动任务使用）", e, i, t)
                    }))
                }, f.reqVideoAdReport = function(e, t) {
                    var i = new p,
                        o = {
                            action: l.ReqUrl.newVdieoReportUrl,
                            app: n.PlatFormAppID,
                            mid: s.User.getUserMid(),
                            ssid: s.User.getDataUser("ssid", ""),
                            hallVer: n.HallVer
                        };
                    t && t.scene && (o.scene = t.scene), i.post(a.instance.AppUrlConf.Web, JSON.stringify(o), (function(e) {
                        var t = d.JsonDecode(e);
                        t = r.table_verify(t);
                        var i = !r.table_isEmpty(t.result);
                        console.log("请求新版看视频上报（活动任务使用）", e, i, t), h.dispatch(c.NET_RESP_VIDEO_AD_REPORT, o.scene)
                    }))
                }, f.onReqWxinShare = function(e, t, i, n) {
                    var a = this;
                    if (void 0 === i && (i = null), void 0 === n && (n = null), this.stopSchedulerOnce(this.shareHandler), this.startShareTime = r.time(), this.shareCallBackData = i, this.resultCallBack = n, this.shareReqData = t, 0 == m.isWXPlatform()) return this.notifyShareResult(l.ShareStateType.START), void this.notifyShareResult(l.ShareStateType.RESULT, !0);
                    console.log("分享-------------调用分享接口"), m.shareAppMessage(t), this.shareHandler = this.addSchedulerOnce(l.shareSucConditions.shareUseTime, (function() {
                        a.shareHandler = null, console.log("分享超时，默认分享成功"), a.notifyShareResult(l.ShareStateType.RESULT, !0)
                    }))
                }, f.notifyShareResult = function(e, t) {
                    if (this.resultCallBack && (this.resultCallBack(e, t, this.shareCallBackData), null != t && (this.resultCallBack = null)), console.log("分享------------回调业务分享结果", t, this.shareReqData), this.shareReqData && t) {
                        if (1 == this.shareReqData.ignoreReport) return;
                        this.onShareAppMessage(this.shareReqData), h.dispatch(c.NET_REQ_SHARE_REWARD), h.dispatch(c.NET_REQ_REPORT_TX_GD_SDK, l.TXGDActionType.SHARE, {
                            target: "APP_MESSAGE"
                        })
                    }
                }, f.processApplicationActions = function(e, t) {
                    if (this.resultCallBack)
                        if (console.log("[分享-----------前后台事件]:" + (t == o.SHOW ? "前台" : "后台")), t == o.SHOW) {
                            this.stopSchedulerOnce(this.shareHandler);
                            var i = !0;
                            console.log("分享------------回到游戏", r.time(), this.startShareTime, r.time() - this.startShareTime), r.time() - this.startShareTime < l.shareSucConditions.shareUseTime && (i = !1), this.notifyShareResult(l.ShareStateType.RESULT, i), this.resultCallBack = null
                        } else t == o.HIDE && this.notifyShareResult(l.ShareStateType.START)
                }, i
            }(f))._instance = null, i._RF.pop()
        }
    }
}))