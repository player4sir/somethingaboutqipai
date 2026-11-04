System.register("chunks:///_virtual/MessageController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createForOfIteratorHelperLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GCache
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.GConstants
        }, function(e) {
            c = e.UIID
        }, function(e) {
            l = e.Encrypt
        }, function(e) {
            u = e.EventManager
        }, function(e) {
            d = e.BaseController
        }, function(e) {
            _ = e.GlobalCmdHeadPHP
        }, function(e) {
            h = e.PopupController
        }],
        execute: function() {
            n._RF.push({}, "b4ef7ZM24dHJINAgN15HwUn", "MessageController", void 0), e("MessageController", function(e) {
                function n(t) {
                    return e.call(this, t) || this
                }
                t(n, e), n.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new n("MessageController")), this._instance
                }, n.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, n.getInstance()
                };
                var d = n.prototype;
                return d.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_CMD_REQ_WATCH, this.reqMessageData), this.addModelListener(r.NET_CMD_RESP_WATCH, this.respMessageData), this.addModelListener(r.NET_REQ_EMAIL_REWARD, this.reqEmailAward), this.addModelListener(r.NET_RESP_EMAIL_REWARD, this.respEmailAward), this.addModelListener(r.NET_REQ_EMAIL_REWARD_ALL, this.reqEmailAwardAll), this.addModelListener(r.NET_RESP_EMAIL_REWARD_ALL, this.respEmailAwardAll), this.addModelListener(r.NET_REQ_EMAIL_DELETE, this.reqEmailDelete)
                }, d.reqMessageData = function(e) {
                    var t = o.MailInfo.getMaxId();
                    t = a.number_valueOf(t, 0);
                    var i = {
                        cmd: _.PHP_EMAIL_DATA,
                        body: {
                            id: t
                        }
                    };
                    console.log("请求邮箱数据,maxId:", t, i), u.dispatch(r.NET_SEND_MSG, i)
                }, d.respMessageData = function(e, t, i, n) {
                    if (console.log("请求邮箱配置数据返回", i, t, n), t) {
                        if (a.isNull(i.data)) return;
                        var r = i.data;
                        o.WatchMessage.dealData(r)
                    }
                }, d.reqEmailAward = function(e, t) {
                    if (a.isNull(t)) this.print("msgid error");
                    else {
                        var i = {
                            cmd: _.PHP_EMAIL_REWARD,
                            body: {
                                msgid: t
                            }
                        };
                        this.print("请求邮件领奖", i), u.dispatch(r.NET_SEND_MSG, i)
                    }
                }, d.respEmailAward = function(e, t, i, n) {
                    if (this.print("请求邮箱奖励返回", i, t, n), 1 != t) return u.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    }), void this.print("请求领取邮件道具奖励失败:", i, n);
                    var d = {};
                    null != i.id && (d = o.MailInfo.getMsgByID(i.id)), d = a.table_verify(d);
                    var _ = l.JsonDecode(d.awards);
                    if (i.awards) {
                        for (var p = [], f = 0; f < i.awards.length; f++)
                            if (_[f] && i.awards[f].havegot == s.MsgAwardStatus.GOT && _[f].havegot == s.MsgAwardStatus.NOT_GOT) {
                                var m = Number(i.awards[f].type),
                                    g = Number(i.awards[f].num);
                                if (m == s.PropertyType.SILVER_COIN || m == s.PropertyType.GOLD_BAR || m == s.PropertyType.DIAMOND) {
                                    var E = o.User.getUserMoneyByID(m);
                                    o.User.updateUserMoneyByID(m, E + g)
                                }
                                var v = o.PropsConf.getPropsInfoById(m),
                                    T = {
                                        icon: o.PropsConf.getPropIconUrlByID(m),
                                        name: v.item_name,
                                        num: g
                                    };
                                console.log("awardnum:", T), p.push(T)
                            } d.status = s.MsgStatus.MSG_STATUS_HANDLED, o.MailInfo.updateMailDataInCache(d), p.length > 0 && (h.getInstance().onOpenView("", c.GetPropPrefab, p), u.dispatch(r.NOTIFY_EMAIL_CHANGE))
                    }
                }, d.reqEmailAwardAll = function(e, t) {
                    if (a.isNull(t)) this.print("msgid error");
                    else {
                        var i = {
                            cmd: _.PHP_EMAIL_REWARD_ALL,
                            body: {
                                msgid: t
                            }
                        };
                        this.print("请求一键领取邮件奖励", i), u.dispatch(r.NET_SEND_MSG, i)
                    }
                }, d.respEmailAwardAll = function(e, t, n, a) {
                    if (this.print("请求一键领取邮件奖励返回", "respData = ", n, t, a), 1 != t) return u.dispatch(r.SYS_TOAST_TIP, {
                        content: n.errorTips
                    }), void this.print("请求一键领取邮件道具奖励失败:", n, a);
                    var l = [];
                    if (console.log("respData.length:", n.length), n.length > 0) {
                        console.log("respData:", n);
                        for (var d, _ = i(n); !(d = _()).done;) {
                            var p = d.value;
                            console.log("awards:", p);
                            for (var f = 0; f < p.length; f++)
                                if (p[f] && (console.log("awards:", p[f]), p[f].havegot == s.MsgAwardStatus.NOT_GOT)) {
                                    var m = Number(p[f].type),
                                        g = Number(p[f].num);
                                    if (m == s.PropertyType.SILVER_COIN || m == s.PropertyType.GOLD_BAR || m == s.PropertyType.DIAMOND) {
                                        var E = o.User.getUserMoneyByID(m);
                                        o.User.updateUserMoneyByID(m, E + g)
                                    }
                                    var v = o.PropsConf.getPropsInfoById(m),
                                        T = {
                                            icon: o.PropsConf.getPropIconUrlByID(m),
                                            name: v.item_name,
                                            num: g
                                        };
                                    console.log("awardnum:", T), l.push(T)
                                }
                        }
                    }
                    l.length > 0 && h.getInstance().onOpenView("", c.GetPropPrefab, l)
                }, d.reqEmailDelete = function(e, t) {
                    if (a.isNull(t)) this.print("msgid error");
                    else {
                        var i = {
                            cmd: _.PHP_EMAIL_DELETE,
                            body: {
                                message_id: t
                            }
                        };
                        this.print("请求删除邮件", i), u.dispatch(r.NET_SEND_MSG, i)
                    }
                }, n
            }(d))._instance = null, n._RF.pop()
        }
    }
}))