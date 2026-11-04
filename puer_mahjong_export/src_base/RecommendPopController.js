System.register("chunks:///_virtual/RecommendPopController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GCache
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants
        }, function(e) {
            s = e.UIID
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            l = e.BaseController
        }, function(e) {
            u = e.GlobalCmdHeadPHP
        }, function(e) {
            d = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "bc0a23EyjhI5qpJ669Wov1y", "RecommendPopController", void 0), e("RecommendPopController", function(e) {
                function i(t) {
                    var i, n;
                    return (n = e.call(this, t) || this)._popUpResult = [], n._popUIDQueue = [], n._currowPosID = null, n._delayPosID = null, n._checkPosData = {}, n._curCheckPosData = null, n._curMainLayer = null, n._allCloseCallback = null, n._noResultTip = null, n.PopupID_UIIDMap = ((i = {})[r.PopupIds.SIGNIN] = {
                        UIID: s.SigninPrefab,
                        ckFunc: "checkSignin"
                    }, i[r.PopupIds.FIRSTPAY_ACTIVITY] = {
                        UIID: s.FirstPayPrefab,
                        ckFunc: "checkFirstPay"
                    }, i[r.PopupIds.HOLIDAY_ACTIVITY] = {
                        UIID: s.GiftDiscountPrefab,
                        ckFunc: "checkHoliday"
                    }, i[r.PopupIds.ACTIVITY_CENTER] = {
                        UIID: s.AtyCenterPrefab,
                        ckFunc: "checkAcvitity"
                    }, i[r.PopupIds.GIFTBAG_RESERVE_POKER] = {
                        UIID: s.GiftReservePokerPrefab,
                        ckFunc: "checkReservePoker"
                    }, i[r.PopupIds.SILVERDELIVERY] = {
                        UIID: s.GiftLargeDeliveryPrefab,
                        ckFunc: "checkLargeSelivery"
                    }, i[r.PopupIds.GIFT_REDBAG] = {
                        UIID: s.GiftRedBagPrefab,
                        ckFunc: "checkRedBag"
                    }, i), n
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("RecommendPopController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var l = i.prototype;
                return l.onInitModuleEvent = function() {
                    this.addModelListener(o.RECOMMEND_POP_SET_CALLBACK, this.setCloseAllFunc), this.addModelListener(o.RECOMMEND_POP_SET_NO_TIP, this.setNoTip), this.addModelListener(o.RECOMMEND_POP_OPEN_VIEW, this.openViewQuene), this.addModelListener(o.RECOMMEND_POP_CLEAN_QUENE, this.cleanViewQuene), this.addModelListener(o.RECOMMEND_POP_GET, this.getRecommend), this.addModelListener(o.NET_CMD_RESP_POP_ADVERTISE, this.getRespcommend)
                }, l.reqPopAdvByPos = function(e, t) {
                    this._currowPosID = e;
                    var i = this.getPopData();
                    if (0 == n.table_isEmpty(i) && 0 == n.table_isEmpty(i[0])) console.log("本地已存在弹窗数据：==>", e, i), this.getRecommendAllPopData(null, i);
                    else {
                        console.log("请求推荐弹窗数据：==>", e);
                        var a = {
                            cmd: u.PHP_ACTIVITY_MODAL_POPUP,
                            body: {}
                        };
                        c.dispatch(o.NET_SEND_MSG, a)
                    }
                }, l.getPopData = function() {
                    var e = [],
                        t = 0;
                    if (this._currowPosID == r.PopupPos.POS_LOGIN) e = a.RecommendPop.getIntoHallPropData(), t = a.RecommendPop.getIntoHallPopTime();
                    else {
                        if (this._currowPosID != r.PopupPos.POS_INTO_ROOM) return null;
                        e = a.RecommendPop.getIntoGamePropData(), t = a.RecommendPop.getIntoGamePopTime()
                    }
                    return [e, t]
                }, l.getRecommend = function(e, t, i, n) {
                    void 0 === i && (i = null), void 0 === n && (n = !1), null != t && (this._checkPosData[t] = {
                        mainCode: d.getInstance().MainLayerCode,
                        noResultTip: this._noResultTip,
                        allCloseCallFunc: this._allCloseCallback,
                        isCheck: !1
                    }, this._curMainLayer != d.getInstance().MainLayerCode && (this.cleanViewQuene(), this.setNoTip(null), this.setCloseAllFunc(null)), this._noResultTip = null, this._allCloseCallback = null, null != this._delayPosID && n ? this.getDelayRecommend() : this.reqPopAdvByPos(t, i))
                }, l.setCloseAllFunc = function(e, t) {
                    void 0 === t && (t = null), this._allCloseCallback = t
                }, l.setNoTip = function(e, t) {
                    void 0 === t && (t = null), this._noResultTip = t
                }, l.getDelayRecommend = function() {
                    this.reqPopAdvByPos(this._delayPosID), this._delayPosID = null
                }, l.getRespcommend = function(e, t, i, n) {
                    console.log("获取获取强弹数据返回", t, i, n), t ? t && i && (a.RecommendPop.updatePopData(i), this.getRecommendAllPopData(e, this.getPopData())) : console.log("获取获取强弹数据失败", i)
                }, l.getRecommendAllPopData = function(e, t) {
                    if (!n.table_isEmpty(t)) {
                        var i = this._currowPosID,
                            a = d.getInstance().MainLayerCode;
                        if (this.print("获取指定推荐弹窗配置数据popupPos=" + i + ",_cur_pos=" + String(a) + ",是否为空:" + String(this._checkPosData[i])), null != this._checkPosData[i] && 1 != !!this._checkPosData[i].isCheck) {
                            var o = this._checkPosData[i].mainCode;
                            if (this._checkPosData[i].isCheck = !0, a != o) return void this.print("推荐场景不一致 不做推荐 checkPos=" + o + ",_cur_pos=" + String(a))
                        }
                        this._curMainLayer = d.getInstance().MainLayerCode, this._curCheckPosData = n.clone(this._checkPosData[i]), this.checkRecommendPopup(t), this._allCloseCallback = null
                    }
                }, l.checkRecommendPopup = function(e) {
                    if (e && e instanceof Array && e.length > 0) {
                        for (var t = e[0], i = e[1], r = [], s = 0; s < t.length; s++) {
                            var l = t[s],
                                u = null;
                            if (l.length > 1) {
                                u = l;
                                var d = [];
                                this.print("checkRecommendPopup:检测到互斥数据:", u);
                                for (var _ = 0; _ < u.length; _++) 1 == a.RecommendPop.checkPopDayCount(u[_]) ? d.push(u[_]) : this.print("checkRecommendPopup:互斥数据 次数不满足:", u[_]);
                                if (d.length > 0)
                                    for (var h = 0; h < d.length; h++)
                                        if (this.PopupID_UIIDMap[d[h].toolid]) {
                                            if (this.PopupID_UIIDMap[d[h].toolid].ckFunc && null != this[this.PopupID_UIIDMap[d[h].toolid].ckFunc]) {
                                                var p = this._popUpResult.length;
                                                if (this[this.PopupID_UIIDMap[d[h].toolid].ckFunc](d[h]), this._popUpResult.length > p) break
                                            }
                                        } else r.push(u)
                            } else u = l[0], 1 == a.RecommendPop.checkPopDayCount(u) && (this.PopupID_UIIDMap[u.toolid] ? this.PopupID_UIIDMap[u.toolid].ckFunc && null != this[this.PopupID_UIIDMap[u.toolid].ckFunc] && this[this.PopupID_UIIDMap[u.toolid].ckFunc](u) : r.push(u))
                        }
                        this.print("checkRecommendPopup:要弹出的数据>>", n.clone(this._popUpResult)), this._popUpResult.length > i && (this._popUpResult = this._popUpResult.splice(0, i), this.print("checkRecommendPopup:超过最大弹窗次数" + i + ">>", n.clone(this._popUpResult))), this._curCheckPosData ? this.showRecommendPopup(this._curCheckPosData.allCloseCallFunc, this._curCheckPosData.noResultTip) : this.showRecommendPopup(null, null)
                    } else c.dispatch(o.SYS_CLOSE_NETLOADING), this._curCheckPosData && (this._curCheckPosData.allCloseCallFunc && this._curCheckPosData.allCloseCallFunc(), this._curCheckPosData.noResultTip && c.dispatch(o.SYS_TOAST_TIP, {
                        content: this._curCheckPosData.noResultTip
                    }))
                }, l.showRecommendPopup = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), this.print("showRecommendPopup", this._popUpResult), this._popUpResult && this._popUpResult.length > 0) {
                        this._popUIDQueue = [];
                        for (var i = this, n = function(e, t) {
                                var n = null;
                                null != i.PopupID_UIIDMap[t.toolid].UIID && (n = i.PopupID_UIIDMap[t.toolid].UIID), null != n && (i._checkRepeatUIID(n), i._popUIDQueue.push({
                                    uiid: n,
                                    toolid: e,
                                    data: t,
                                    mainlayer: i._curMainLayer
                                }))
                            }, a = 0; a < this._popUpResult.length; a++) {
                            var r = this._popUpResult[a];
                            n(r.toolid, r)
                        }
                        this._popUpResult = [], this.openViewQuene(null, e, t)
                    } else c.dispatch(o.SYS_CLOSE_NETLOADING), e && e(), t && c.dispatch(o.SYS_TOAST_TIP, {
                        content: t
                    })
                }, l._checkRepeatUIID = function(e) {
                    if (0 != this._popUIDQueue.length)
                        for (var t = this._popUIDQueue.length - 1; t >= 0; t--) this._popUIDQueue[t].uiid == e && this._popUIDQueue.splice(t, 1)
                }, l.openViewQuene = function(e, t, i) {
                    if (void 0 === e && (e = null), void 0 === i && (i = null), this._popUIDQueue.length <= 0) return this.print("openViewQuene 1"), null != e && t ? t() : c.dispatch(o.SYS_CLOSE_NETLOADING), void(i && c.dispatch(o.SYS_TOAST_TIP, {
                        content: i
                    }));
                    for (var n = d.getInstance().MainLayerCode, r = null, s = 0; s < this._popUIDQueue.length; s++)
                        if (this._popUIDQueue[s].mainlayer == n) {
                            r = this._popUIDQueue[s], this._popUIDQueue.splice(s, 1);
                            break
                        } if (r) {
                        var l = this;
                        c.dispatch(o.SYS_SHOW_NETLOADING, 60), d.getInstance().onOpenView("", r.uiid, r.data, {
                            onAdded: function(e, t) {
                                c.dispatch(o.SYS_CLOSE_NETLOADING), l.print("弹窗队列 添加完成===>更新次数", r), a.RecommendPop.updatePopDayCountData(r.data)
                            },
                            onRemoved: function() {
                                l.print("弹窗队列 移除完成===>", r), c.dispatch(o.RECOMMEND_POP_OPEN_VIEW, t)
                            }
                        })
                    } else this.print("openViewQuene 场景不一致", this._popUIDQueue, n)
                }, l.cleanViewQuene = function(e) {
                    this._popUIDQueue = []
                }, l.checkSignin = function(e) {
                    a.RedDot.has_reddot_signin() && this._popUpResult.push(e)
                }, l.checkHoliday = function(e) {
                    a.Activity.canShow(r.RedDotConf.Holiday) && this._popUpResult.push(e)
                }, l.checkFirstPay = function(e) {
                    a.Activity.canShow(r.RedDotConf.FirstPay) && a.Activity.canShowFirstPay() && this._popUpResult.push(e)
                }, l.checkAcvitity = function(e) {
                    a.RedDot.has_reddot_activityNormal() && this._popUpResult.push(e)
                }, l.checkReservePoker = function(e) {
                    a.Activity.canShow(r.RedDotConf.ReservePoker) && this._popUpResult.push(e)
                }, l.checkLargeSelivery = function(e) {
                    a.Activity.canShow(r.RedDotConf.LargeDelivery) && this._popUpResult.push(e)
                }, l.checkRedBag = function(e) {
                    a.Activity.canShow(r.RedDotConf.GiftRedBag) && this._popUpResult.push(e)
                }, i
            }(l))._instance = null, i._RF.pop()
        }
    }
}))