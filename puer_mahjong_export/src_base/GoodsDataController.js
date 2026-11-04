System.register("chunks:///_virtual/GoodsDataController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts", "./PayAgent.ts", "./PopupController.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
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
            l = e.EventManager
        }, function(e) {
            u = e.BaseController
        }, function(e) {
            d = e.GlobalCmdHeadPHP
        }, function(e) {
            _ = e.PayAgent
        }, function(e) {
            h = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "3fcdb0H8OZHoqQcP2YTzpG5", "GoodsDataController", void 0), e("GoodsDataController", function(e) {
                function i(t) {
                    var i, n;
                    return (n = e.call(this, t) || this)._lastUpdateTime = ((i = {}).GoodsData = 0, i.Props = 0, i.Roles = 0, i.RoleSkill = 0, i.BuildData = 0, i), n.eventGoodlisteners = {}, n.tempEventGoodlisteners = {}, n.currowReqCreaterOrder = null, n.handlerShareExpTime = null, n.isShowGetPropDialog = !0, n.curPage = 0, n.totalPage = 100, n
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("GoodsDataController")), this._instance
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                };
                var u = i.prototype;
                return u.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_REQ_GOODS_INFO, this.reqGoodsInfo), this.addModelListener(r.NET_REQ_GOODS_INFO_BATCH, this.reqGoodsInfoBatch), this.addModelListener(r.NET_FORWARD_GOODS_INFO, this.resqGoodsInfo), this.addModelListener(r.NET_FORWARD_GOODS_INFO_BATCH, this.resqGoodsInfoBatch), this.addModelListener(r.NET_CMD_REQ_BUY_MALL_PROP, this.reqBuyMallProp), this.addModelListener(r.NET_CMD_RESP_BUY_MALL_PROP, this.respBuyMallProp), this.addModelListener(r.OTHER_PAY_WILL, this.reqWillPay), this.addModelListener(r.OTHER_PAY_RESULT, this.otherPayResult), this.addModelListener(r.OTHER_SHTRE_FRIEND_RESULT, this.otherShareFriend)
                }, u.reqGoodsInfo = function(e, t) {
                    if ("" != n.deviceInfo.WX_PayOfferId && !a.table_isEmpty(t)) {
                        (t = a.table_verify(t)).scene = a.number_valueOf(t.scene, s.GoodsListID.MarketGold), t.money = a.nullToDefault(t.money, o.User.getUserMoneyByID()), t.operation = n.PhoneCardType, t.bundleId = n.BundleId;
                        var i = {
                            cmd: d.PHP_GOODS_INFO,
                            body: t
                        };
                        l.dispatch(r.NET_SEND_MSG, i)
                    }
                }, u.reqGoodsInfoBatch = function(e, t) {
                    if ("" != n.deviceInfo.WX_PayOfferId && (null != t && t.reset && (this.curPage = 0, this.totalPage = 100, o.ShopInfo.resetShopList()), this.curPage < this.totalPage)) {
                        var i = {
                            cmd: d.PHP_GOODS_INFO_BATCH,
                            body: {
                                page: this.curPage + 1,
                                page_size: 100
                            }
                        };
                        l.dispatch(r.NET_SEND_MSG, i)
                    }
                }, u.resqGoodsInfoBatch = function(e, t, i, n) {
                    console.log("批量获取商城数据：", t, i, n), null != i && i.g_scene && (this.curPage = i.page, this.totalPage = i.count_page, Object.keys(i.g_scene).forEach((function(e) {
                        var t = i.g_scene[e];
                        t.scene = e, o.ShopInfo.update(t)
                    })), this.curPage < this.totalPage && this.reqGoodsInfoBatch(null, null))
                }, u.resqGoodsInfo = function(e, t, i, n) {
                    console.log(i, "商城数据返回---" + t, n), t && !a.table_isEmpty(i) ? (o.ShopInfo.update(i), l.dispatch(r.ACTIVITY_GOODSLIST_UPDATE, n, n)) : n && (n.reqNum = a.number_valueOf(n.reqNum) + 1, n.reqNum < 2 && this.reqGoodsInfo(null, n))
                }, u.reqBuyMallProp = function(e, t) {
                    console.log("请求商城兑换", t), this.isShowGetPropDialog = !1 !== t.isShowGetPropDialog;
                    var i = {
                            gid: t.gid,
                            gnum: t.gnum,
                            scene: s.ShopBigTabType.PROPS
                        },
                        n = {
                            cmd: d.PHP_BUY_MALL_PROP,
                            body: i
                        };
                    l.dispatch(r.NET_SEND_MSG, n)
                }, u.respBuyMallProp = function(e, t, i, n) {
                    if (this.print("请求商城兑换(兑换道具)返回", t, i, n), l.dispatch(r.SYS_CLOSE_NETLOADING), t && i.flag >= 0) {
                        this._checkUpdateBackPack(n);
                        var u = a.number_valueOf(i.flag);
                        if (1 == u) {
                            if (null != i.money && o.User.updateUserMoneyByID(s.PropertyType.SILVER_COIN, i.money), null != i.diamond && o.User.updateUserMoneyByID(s.PropertyType.GOLD_BAR, i.diamond), l.dispatch(r.NOTIFY_EXCHANGE_RESULT, {
                                    state: t,
                                    data: i
                                }), this.isShowGetPropDialog) {
                                var d = o.PropsConf.getPropIconUrlByID(i.propsId),
                                    _ = {
                                        name: i.name,
                                        icon: d,
                                        num: n.gnum
                                    };
                                h.getInstance().onOpenView("", c.GetPropPrefab, [_])
                            }
                        } else - 2 == u && (null != i.money && o.User.updateUserMoneyByID(s.PropertyType.SILVER_COIN, i.money), null != i.diamond && o.User.updateUserMoneyByID(s.PropertyType.GOLD_BAR, i.diamond), l.dispatch(r.NOTIFY_EXCHANGE_RESULT, {
                            state: !1,
                            data: i
                        }))
                    } else l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.msg
                    }), l.dispatch(r.NOTIFY_EXCHANGE_RESULT, {
                        state: !1,
                        data: i
                    })
                }, u._checkUpdateBackPack = function(e) {
                    var t = a.number_valueOf(e.propsId);
                    0 != t && (o.BackPack.getDataByBoxItemID(t) ? o.BackPack.updatePropNum({
                        propsNum: e.propsNum,
                        propId: t
                    }) : l.dispatch(r.NET_CMD_REQ_USER_BACKPACK))
                }, u.otherPayResult = function(e, t) {
                    this.print("平台支付结果==>", t), t && t.respCode == s.AppPayResult.SUCCESS && l.dispatch(r.SYS_TOAST_TIP, {
                        content: "支付成功啦，我们正在为你发货哦，请你稍等片刻~"
                    })
                }, u.clear = function() {
                    e.prototype.clear.call(this), this.tempEventGoodlisteners = {}, this.eventGoodlisteners = {}
                }, u.reqWillPay = function(e, t, i, n, r) {
                    if (void 0 === n && (n = null), !a.isNull(t) && !a.isNull(i)) {
                        var s = {
                            scene: t,
                            gid: i,
                            callback: n,
                            sceneType: o.CurrowPaySceneType,
                            otherEx: {},
                            _extra: r
                        };
                        o.Desk && (s.otherEx = {
                            gameID: o.SelectGame.getCurGameId(),
                            tableID: o.Desk.getCurTableID(),
                            levelID: o.Desk.getCurLevelID()
                        }), this.dump(s, "即将请求支付"), _.getInstance().startPay(s)
                    }
                }, u.otherShareFriend = function(e, t) {
                    if (t) {
                        var i = 0,
                            n = o.ShareInfo.getShareConfigByType(s.ShareSceneConf.friend) || [];
                        if (a.table_isEmpty(n)) return;
                        n && n[0].share_id && (i = n[0].share_id), l.dispatch(r.NET_REQ_SHARE_AWARD, i, s.ReqUrl.shareType.other, !1)
                    } else l.dispatch(r.SYS_TOAST_TIP, {
                        content: "请分享到指定好友"
                    })
                }, i
            }(u))._instance = null, i._RF.pop()
        }
    }
}))