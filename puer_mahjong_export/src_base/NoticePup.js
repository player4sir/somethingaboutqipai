System.register("chunks:///_virtual/NoticePup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GameConstant.ts", "./Encrypto.ts", "./LocalStorage.ts", "./JumpHelper.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createForOfIteratorHelperLoose
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.ClientInfo
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.GConstants, s = e.POPUSCENE
        }, function(e) {
            c = e.Encrypt
        }, function(e) {
            l = e.LocalStorage
        }, function(e) {
            u = e.JumpHelper
        }, function(e) {
            d = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "f8226o+5EBHX4Yh5KOHJQyN", "NoticePup", void 0), e("NoticePup", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "NoticePup") || this).__User = null, i._noticeConfig = null, i._redConfLocalData = [], i._redConfigData = {}, i._forcePopuConfig = null, i.curScene = s.NONE, i.realKey = "Notice_pup_red_dot", i.popuKey = "popu_config", i.actId = r.ActivityRedToAcId, i.redId = r.RedDotConf, i._popuDialogs = [], i._hasUpdate = !1, i.__User = t, i.initLocalConfig(), i
                }
                t(n, e);
                var d = n.prototype;
                return d.initLocalConfig = function() {
                    var e;
                    this._redConfLocalData = o.table_verify(c.JsonDecode(l.get(this.realKey, null)), !0);
                    var t = l.get(this.popuKey, null);
                    if ("string" == typeof t && t.length) try {
                        this._forcePopuConfig = o.table_verify(JSON.parse(t), !0)
                    } catch (e) {}
                    null != (e = this._forcePopuConfig) && e.time && !o.isTodayByString(this._forcePopuConfig.time) && (l.remove(this.popuKey), this._forcePopuConfig = null)
                }, d.saveLocalConfig = function() {
                    l.set(this.realKey, c.JsonEncode2(this._redConfLocalData))
                }, d.updateNoticeConfig = function(e) {
                    this._noticeConfig = e || [], this._noticeConfig.length && this._noticeConfig.sort((function(e, t) {
                        return t.sort - e.sort
                    }))
                }, d.getNoticeConfig = function() {
                    return this._noticeConfig || []
                }, d.resetConfig = function() {
                    this._redConfigData = {}
                }, d.getNoticeRedDot = function(e) {
                    var t;
                    if (null == (t = this._noticeConfig) || !t.length) return !1;
                    if (e) return this.getNoticeRedById(e);
                    for (var i = this._noticeConfig.length, n = 0; n < i; n++)
                        if (this.getNoticeRedById(this._noticeConfig[n].notice_id)) return !0
                }, d.getNoticeRedById = function(e, t) {
                    var i = this._noticeConfig.filter((function(t) {
                            return t.notice_id == e
                        }))[0].red_dot_type,
                        n = this._redConfLocalData.filter((function(t) {
                            return t.noticeId == e
                        })),
                        a = !1,
                        r = {
                            noticeId: e,
                            dot_type: i,
                            time: o.timeEx()
                        },
                        s = !1;
                    switch (i) {
                        case 0:
                            0 == n.length ? (this._redConfLocalData.push(r), s = !0) : (n[0].dot_type = i, n[0].time = o.timeEx());
                            break;
                        case 1:
                            0 == n.length ? (this._redConfLocalData.push(r), a = !0, s = !0) : o.isTodayByString(n[0].time) || (t && (n[0].time = o.timeEx()), a = !0, s = !0);
                            break;
                        case 2:
                            0 == n.length ? (this._redConfLocalData.push(r), a = !0, s = !0) : (n[0].dot_type = i, n[0].time = o.timeEx());
                            break;
                        case 3:
                            this._redConfigData[e] || (t && (this._redConfigData[e] = !0), a = !0)
                    }
                    return s && this.saveLocalConfig(), a
                }, d.updateCurScene = function(e) {
                    this.curScene = e, this._popuDialogs = []
                }, d.getCurScene = function() {
                    return this.curScene
                }, d.updateForcePopuConfig = function(e) {
                    var t, i, n;
                    null != e && e.cfg && (null != (t = e.cfg.login_list) && t.length && e.cfg.login_list.sort((function(e, t) {
                        return e.sort - t.sort
                    })), null != (i = e.cfg.settlement_list) && i.length && e.cfg.settlement_list.sort((function(e, t) {
                        return e.sort - t.sort
                    })), null != (n = e.cfg.roombacklevel_list) && n.length && e.cfg.roombacklevel_list.sort((function(e, t) {
                        return e.sort - t.sort
                    }))), this._hasUpdate = !0, this._forcePopuConfig = this.mergeForcePopuConfig(this._forcePopuConfig, e), console.log(this._forcePopuConfig)
                }, d.checkHasUpdate = function() {
                    return this._hasUpdate
                }, d.mergeForcePopuConfig = function(e, t) {
                    if (!e || this.isEmptyPopuDialog(e)) return this.processNewConfigWithLeftNum(t);
                    var i = JSON.parse(JSON.stringify(e));
                    return i.total_pay_money = o.number_valueOf(t.total_pay_money), i.seven_day_pay_money = o.number_valueOf(t.seven_day_pay_money), i.seven_day_pay_num = o.number_valueOf(t.seven_day_pay_num), i.bankruptcy_num = o.number_valueOf(t.bankruptcy_num), i.cfg.login_list = this.mergeDialogItemListWithFix(e.cfg.login_list, t.cfg.login_list), i.cfg.settlement_list = this.mergeDialogItemListWithFix(e.cfg.settlement_list, t.cfg.settlement_list), i.cfg.roombacklevel_list = this.mergeDialogItemListWithFix(e.cfg.roombacklevel_list, t.cfg.roombacklevel_list), i
                }, d.mergeDialogItemListWithFix = function(e, t) {
                    var i = this,
                        n = JSON.parse(JSON.stringify(e)),
                        a = JSON.parse(JSON.stringify(t)),
                        o = new Set,
                        r = new Set;
                    n.forEach((function(e) {
                        e.content.forEach((function(e) {
                            o.add(e.act)
                        }))
                    })), a.forEach((function(e) {
                        e.content.forEach((function(e) {
                            r.add(e.act)
                        }))
                    }));
                    for (var s = n.length - 1; s >= 0; s--) {
                        for (var c = n[s], l = c.content.length - 1; l >= 0; l--) {
                            var u = c.content[l];
                            r.has(u.act) || c.content.splice(l, 1)
                        }
                        0 === c.content.length && n.splice(s, 1)
                    }
                    return a.forEach((function(e) {
                        e.content.forEach((function(t) {
                            var a = t.act;
                            o.has(a) ? i.updateExistingContentWithFix(n, e, t) : i.insertNewContentWithFix(n, e, t)
                        }))
                    })), n
                }, d.updateExistingContentWithFix = function(e, t, n) {
                    for (var a, r = !1, s = i(e); !(a = s()).done;) {
                        for (var c, l = a.value, u = i(l.content); !(c = u()).done;) {
                            var d = c.value;
                            if (d.act === n.act) {
                                d.pop_num = o.number_valueOf(n.pop_num), void 0 === d.left_num || null === d.left_num ? (console.log("修复left_num: act=" + d.act + ", 从pop_num赋值=" + n.pop_num), d.left_num = o.number_valueOf(n.pop_num)) : console.log("保留left_num: act=" + d.act + ", 已有值=" + d.left_num), d.scene = n.scene, d.user_group = JSON.parse(JSON.stringify(n.user_group)), r = !0;
                                break
                            }
                        }
                        if (r) break
                    }
                    r || this.insertContentWithLeftNum(e, t, n)
                }, d.insertNewContentWithFix = function(e, t, i) {
                    this.insertContentWithLeftNum(e, t, i)
                }, d.insertContentWithLeftNum = function(e, t, i) {
                    var n = JSON.parse(JSON.stringify(i));
                    n.left_num = o.number_valueOf(i.pop_num), console.log("插入新内容: act=" + n.act + ", 设置left_num=" + n.left_num);
                    var a = this.findInsertIndex(e, t.sort);
                    if (-1 === a) e.push({
                        sort: t.sort,
                        content: [n]
                    });
                    else if (e[a].sort === t.sort) e[a].content.push(n);
                    else {
                        var r = {
                            sort: t.sort,
                            content: [n]
                        };
                        e.splice(a, 0, r)
                    }
                }, d.findInsertIndex = function(e, t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i].sort >= t) return i;
                    return -1
                }, d.isEmptyPopuDialog = function(e) {
                    if (!e) return !0;
                    if (!e.cfg) return !0;
                    var t = !e.cfg.login_list || 0 === e.cfg.login_list.length,
                        i = !e.cfg.settlement_list || 0 === e.cfg.settlement_list.length,
                        n = !e.cfg.roombacklevel_list || 0 === e.cfg.roombacklevel_list.length;
                    return t && i && n
                }, d.processNewConfigWithLeftNum = function(e) {
                    var t = JSON.parse(JSON.stringify(e));
                    return t.cfg.login_list && (t.cfg.login_list = this.processDialogItemListWithLeftNum(t.cfg.login_list)), t.cfg.settlement_list && (t.cfg.settlement_list = this.processDialogItemListWithLeftNum(t.cfg.settlement_list)), t.cfg.roombacklevel_list && (t.cfg.roombacklevel_list = this.processDialogItemListWithLeftNum(t.cfg.roombacklevel_list)), t
                }, d.processDialogItemListWithLeftNum = function(e) {
                    if (!e || 0 === e.length) return e || [];
                    var t = JSON.parse(JSON.stringify(e));
                    return t.forEach((function(e) {
                        e.content && e.content.length > 0 && e.content.forEach((function(e) {
                            void 0 !== e.left_num && null !== e.left_num || (e.left_num = o.number_valueOf(e.pop_num))
                        }))
                    })), t
                }, d.checkNextPopu = function() {
                    var e;
                    if (null != (e = this._popuDialogs) && e.length) {
                        var t = this._popuDialogs.shift();
                        u.getInstance().jumpToViewByActID("" + t.act, {
                            openTag: "popu"
                        })
                    }
                }, d._getPopuConfig = function(e, t, i) {
                    void 0 === i && (i = !1);
                    var n = this,
                        a = this.__User.SquareData.getSupportActIds();

                    function o(e) {
                        var t, o = null;
                        if (null != e && null != (t = e.content) && t.length)
                            for (var r = e.content, s = r.length, c = 0; c < s; c++)
                                if (r[c].left_num > 0 && (r[c].act == n.actId[n.redId.ActivityNoticePopu] || null != a && a.length && a.includes(r[c].act))) {
                                    if (n._checkUserGroup(r[c])) {
                                        o = r[c], i && (r[c].left_num = r[c].left_num - 1);
                                        break
                                    }
                                    console.log("强弹----用户群条件不满足：act=" + r[c].act)
                                } return o
                    }
                    var r = [],
                        s = null == e ? void 0 : e.length;
                    if (s)
                        for (var c = null, l = 0; l < s; l++)(c = o(e[l])) && r.push(c);
                    return r
                }, d._checkUserGroup = function(e) {
                    var t = this,
                        i = e.user_group,
                        n = !0;
                    if (null != i && i.length)
                        for (var s = 0; s < i.length; s++) {
                            var c = i[s].cond;
                            if (null != c && c.length) {
                                for (var l = 0; l < c.length; l++) {
                                    var u = o.number_valueOf(c[l].num),
                                        d = !1,
                                        _ = !1;
                                    switch (c[l].user_type) {
                                        case r.NOTICE_PUP_USERGROUP_TYPE.REGISTER_DAY:
                                            d = t._checkOperator(this.__User.getDataUser("join", 0), u, c[l].operator), _ = !0;
                                            break;
                                        case r.NOTICE_PUP_USERGROUP_TYPE.HISTORY_PAY:
                                            d = t._checkOperator(this._forcePopuConfig.total_pay_money, u, c[l].operator), _ = !0;
                                            break;
                                        case r.NOTICE_PUP_USERGROUP_TYPE.SEVEN_DAY_PAY:
                                            d = t._checkOperator(this._forcePopuConfig.seven_day_pay_money, u, c[l].operator), _ = !0;
                                            break;
                                        case r.NOTICE_PUP_USERGROUP_TYPE.SEVEN_DAY_PAY_COUNT:
                                            d = t._checkOperator(this._forcePopuConfig.seven_day_pay_num, u, c[l].operator), _ = !0;
                                            break;
                                        case r.NOTICE_PUP_USERGROUP_TYPE.USER_ASSET:
                                            d = t._checkOperator(this.__User.getUserMoneyByID(0), u, c[l].operator), _ = !0;
                                            break;
                                        case r.NOTICE_PUP_USERGROUP_TYPE.BANKRUPT_COUNT:
                                            d = t._checkOperator(this.__User.BankrupData.curBankruptCount, u, c[l].operator), _ = !0;
                                            break;
                                        case r.NOTICE_PUP_USERGROUP_TYPE.HALL_VERSION:
                                            d = t._checkOperator(a.HallVer, u, c[l].operator), _ = !0
                                    }
                                    if (!_ || 0 == d) {
                                        n = !1;
                                        break
                                    }
                                }
                                if (n) return !0
                            }
                        }
                    return n
                }, d._checkOperator = function(e, t, i) {
                    switch (i) {
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.EQUAL:
                            return e == t;
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.NOT_EQUAL:
                            return e != t;
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.LESS_THAN:
                            return e < t;
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.LESS_THAN_OR_EQUAL:
                            return e <= t;
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.GREATER_THAN:
                            return e > t;
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.GREATER_THAN_OR_EQUAL:
                            return e >= t;
                        case r.NOTICE_PUP_USERGROUP_OPERATOR.CONTAIN:
                            return e.includes(t);
                        default:
                            return !1
                    }
                }, d.getPopuByScene = function(e, t, i) {
                    var n, a;
                    if (void 0 === i && (i = !1), this.__User.getIsFirstLogin() && e == s.LOGIN) return null;
                    var r = null == (n = this._forcePopuConfig) ? void 0 : n.cfg,
                        c = null;
                    if (r && this._hasUpdate) switch (e) {
                        case s.LOGIN:
                            c = this._getPopuConfig(r.login_list, t, i);
                            break;
                        case s.SELECTLEVEL:
                            break;
                        case s.SETTLE:
                            c = this._getPopuConfig(r.settlement_list, t, i);
                            break;
                        case s.ROOMTOSELECTLEVEL:
                            c = this._getPopuConfig(r.roombacklevel_list, t, i);
                            break;
                        case s.SELECTLEVELTOHALL:
                    }
                    return null != (a = c) && a.length && (c.forEach((function(t) {
                        t.scene = e
                    })), i && (this._popuDialogs = c, this._forcePopuConfig.time = o.timeEx(), l.set(this.popuKey, JSON.stringify(this._forcePopuConfig)))), c
                }, d.checkActivityConfig = function(e, t) {
                    return e || t && (e = r.ActivityRedToAcId[t]), this.__User.Activity.checkGameActivityConfig(e)
                }, n
            }(d)), n._RF.pop()
        }
    }
}))