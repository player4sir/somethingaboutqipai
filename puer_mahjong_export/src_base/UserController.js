System.register("chunks:///_virtual/UserController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./GlobalCmd.ts", "./AppControler.ts", "./PopupController.ts"], (function(e) {
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
            _ = e.AppControler
        }, function(e) {
            h = e.PopupController
        }],
        execute: function() {
            i._RF.push({}, "e5622+2NqZHCoBdGAnfAH4h", "UserController", void 0), e("UserController", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this)._tmpDataFromServer = void 0, t._exchangeNum = 1, t._updateTimeList = [], t._updateTimeMap = {}, t._updateTimehandler = null, t
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("UserController")), this._instance
                };
                var u = i.prototype;
                return u.onInitModuleEvent = function() {
                    this.addModelListener(r.NET_CMD_REQ_USER_BACKPACK, this.reqUserBagPack), this.addModelListener(r.NET_CMD_RESP_USER_BACKPACK, this.respUserBagPack), this.addModelListener(r.NET_CMD_RESP_USER_BACKPACK_USE, this.respBagPackPropUse), this.addModelListener(r.NET_CMD_RESP_USER_BACKPACK_SELL, this.respBagPackPropExchange), this.addModelListener(r.NET_CMD_RESP_USER_BACKPACK_RECORD, this.respExchangeHistory), this.addModelListener(r.NET_CMD_REQ_USER_BACKPACK_CODE, this.reqBagCode), this.addModelListener(r.NET_CMD_RESP_USER_BACKPACK_CODE, this.respBagCode), this.addModelListener(r.NET_RECEIVE_PHP_SERVER_USER_VIP_INFO, this.receiveGetUserVipInfo), this.addModelListener(r.REQ_USE_CONSUME_PROPS, this.reqUseConsumeProps), this.addModelListener(r.NET_INTERACTIVE_PROP_USE, this.repUseConsumeProps), this.addModelListener(r.NET_BROAD_USE_PROPS, this.onBroadUseProps), this.addModelListener(r.REQ_DIAMOND_SHOP_CONFIG, this.reqDiamondConfig), this.addModelListener(r.NET_DIAMOND_SHOP_EVENT_TAB, this.onDiamondShopEventTab), this.addModelListener(r.NET_DIAMOND_SHOP_EVENT_LIST, this.onDiamondShopList), this.addModelListener(r.NET_DIAMOND_SHOP_EVENT_BUY, this.onDiamondBuy), this.addModelListener(r.NET_DIAMOND_BUY, this.reqDiamondBuy), this.addModelListener(r.NET_DIAMOND_SHOP_EVENT_HELP, this.onDiamondHelp), this.addModelListener(r.NET_DIAMOND_SHOP_EVENT_RECORD, this.onDiamondRecord), this.addModelListener(r.NET_REQ_VIP_CONFIG, this.reqVipConfig), this.addModelListener(r.NET_RESP_VIP_CONFIG, this.respVipConfig), this.addModelListener(r.NET_REQ_VIP_GIFT_REWARD, this.reqVipReward), this.addModelListener(r.NET_RESP_VIP_GIFT_REWARD, this.respVipReward), this.addModelListener(r.NET_REQ_DECORATION_CONFIG, this.reqDecorationConfig), this.addModelListener(r.NET_RESP_DECORATION_CONFIG, this.respDecorationConfig), this.addModelListener(r.NET_REQ_DECORATION_USER_INFO, this.reqDecorationUserInfo), this.addModelListener(r.NET_RESP_DECORATION_USER_INFO, this.respDecorationUserInfo), this.addModelListener(r.NET_REQ_USE_DECORATION, this.reqUseDecoration), this.addModelListener(r.NET_RESP_USE_DECORATION, this.respUseDecoration)
                }, i.init = function() {
                    this._instance && this._instance.clear(), this._instance = null, i.getInstance()
                }, u.reqUserBagPack = function(e) {
                    console.log("背包数据请求"), this._tmpDataFromServer = [], this.getBagListByPage(1)
                }, u.getBagListByPage = function(e) {
                    if (e) {
                        var t = {
                                action: "bag.boxlist",
                                page: e,
                                pagenum: 200,
                                hall_version: n.HallVer,
                                timestamp: a.time(),
                                appid: n.PlatFormAppID,
                                mid: o.User.getUserMid(),
                                ssid: o.User.getDataUser("ssid", "")
                            },
                            i = {
                                cmd: d.PHP_PACKAGE_BAGLIST,
                                body: t
                            };
                        l.dispatch(r.NET_SEND_MSG, i)
                    }
                }, u.respUserBagPack = function(e, t, i, n) {
                    var a = this;
                    if (console.log("背包道具数据的返回", t, i), t) {
                        var r = Number(i.tpage),
                            s = Number(i.page);
                        if (this._tmpDataFromServer.length >= s) return;
                        this._tmpDataFromServer[s - 1] = i.box, s >= r ? function() {
                            for (var e = a._tmpDataFromServer[0] || [], t = function(t) {
                                    Object.keys(a._tmpDataFromServer[t]).forEach((function(i) {
                                        e.push(a._tmpDataFromServer[t][i])
                                    }))
                                }, i = 1; i < a._tmpDataFromServer.length; i++) t(i);
                            a._tmpDataFromServer = [], o.BackPack.onGetBagListAllData(e)
                        }() : this.getBagListByPage(s + 1)
                    }
                }, u.reqBagPackPropUse = function(e) {
                    if (void 0 === e && (e = null), e) {
                        var t = {
                            cmd: d.PHP_PACKAGE_USE,
                            body: e
                        };
                        l.dispatch(r.NET_SEND_MSG, t)
                    }
                }, u.respBagPackPropUse = function(e, t, i, n) {
                    if (console.log("背包道具使用数据返回", t, i), t) {
                        if (n.clientType === o.BackPack.BagTypeAdapter.s_general) l.dispatch(r.SYS_TOAST_TIP, {
                            content: "丢弃成功"
                        });
                        else if (n.clientType === o.BackPack.BagTypeAdapter.s_shard) l.dispatch(r.SYS_TOAST_TIP, {
                            content: "恭喜获得" + i.desc
                        });
                        else if (n.clientType === o.BackPack.BagTypeAdapter.s_onlineVirtual) {
                            var a = {
                                txt_desc: "兑换成功！\n请您耐心等待，奖励将于7个工作日内发放",
                                buttonsMap: [{
                                    label: s.BtnConf.Label_Confirm,
                                    click: function() {
                                        h.getInstance().onCloseView("", c.PopWindow)
                                    }
                                }]
                            };
                            h.getInstance().onOpenView("", c.PopWindow, a)
                        } else if (n.clientType === o.BackPack.BagTypeAdapter.s_offline || n.clientType === o.BackPack.BagTypeAdapter.s_onlineEntity) {
                            var u = {
                                txt_desc: "兑换成功！\n请您耐心等待，奖励将于30个工作日内发放",
                                buttonsMap: [{
                                    label: s.BtnConf.Label_Confirm,
                                    click: function() {
                                        h.getInstance().onCloseView("", c.PopWindow)
                                    }
                                }]
                            };
                            h.getInstance().onOpenView("", c.PopWindow, u)
                        }
                        o.BackPack.updateBagDataByChangeData(i.info)
                    } else l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.reqBagPackPropExchange = function(e) {
                    if (void 0 === e && (e = null), e) {
                        var t = {
                            cmd: d.PHP_PACKAGE_SELL,
                            body: e
                        };
                        l.dispatch(r.NET_SEND_MSG, t)
                    }
                }, u.respBagPackPropExchange = function(e, t, i, n) {
                    console.log("背包道具兑换数据返回", t, i), t ? (l.dispatch(r.SYS_TOAST_TIP, {
                        content: "兑换成功！"
                    }), o.BackPack.updateBagDataByChangeData(i)) : l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.receiveGetUserVipInfo = function(e, t) {
                    if (console.log("广播:server返回用户VIP详细信息的返回", t), t.propDetail instanceof Array) {
                        for (var i = [], n = t.propDetail.length - 1; n >= 0; n--) {
                            var a = t.propDetail[n];
                            if (a.expires = parseInt(a.expires) || 0, a.propsType == s.UserPropsType.TYPE_VIP) t.propDetail.splice(n, 1);
                            else {
                                var c = o.PropsConf.getPropsInfoById(a.propsType);
                                if (console.log("GlobalSocketMessageHandler.onGetUserVipInfo", c), c) {
                                    if (10 == parseInt(c.prop_attr)) return;
                                    if (o.DecorationData.onBuySuccess(c)) return
                                }
                                var u = o.BackPack.getDataByBoxItemID(a.propsType);
                                u ? i.push({
                                    boxItemID: a.propsType,
                                    changeNum: a.allowTimes - u.number
                                }) : i.push({
                                    boxItemID: a.propsType,
                                    changeNum: a.allowTimes
                                })
                            }
                        }
                        o.BackPack.updateBagDataByChangeData(i)
                    }
                    l.dispatch(r.NET_REQ_VIP_MEMBER_CONFIG)
                }, u.reqExchangeHistory = function() {
                    var e = {
                        cmd: d.PHP_PACKAGE_RECORD,
                        body: {
                            page: 1,
                            pagenum: 50
                        }
                    };
                    l.dispatch(r.NET_SEND_MSG, e)
                }, u.respExchangeHistory = function(e, t, i, n) {
                    console.log("背包道具兑换历史记录返回", t, i), t ? o.BackPack.exchangeHistory = i.record || [] : l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.reqUseConsumeProps = function(e, t) {
                    var i = {
                        cmd: d.PHP_INTERACTIVE_PROP_USE,
                        body: t
                    };
                    l.dispatch(r.NET_SEND_MSG, i)
                }, u.repUseConsumeProps = function(e, t, i) {
                    console.log("互动道具使用结果：", t, i), t || l.dispatch(r.NET_REQ_CONFIG, {
                        cmd: d.PHP_INTERACTIVE_PROP_CONFIG,
                        param: {}
                    })
                }, u.onBroadUseProps = function(e, t) {
                    if (t && null != t.propType && null != t.propUseNum && t.mid == o.User.getUserMid()) {
                        var i = [];
                        i.push({
                            boxItemID: t.propType,
                            changeNum: -t.propUseNum
                        }), o.BackPack.updateBagDataByChangeData(i)
                    }
                    if (0 != t.propTarget.length)
                        for (var n = t.propTarget.split(","), a = Object.values(o.SelectGame.getPopConfig() || {}), s = !1, c = 0; c < a.length && !s; c++)
                            for (var u = a[c], d = 0; d < u.length; d++) {
                                var _ = u[d];
                                if (_.type == t.propType) {
                                    var h = {
                                        formSeatId: Number(n[0]),
                                        formCharmNum: t.propUseNum * _.send,
                                        toSeatId: Number(n[1]),
                                        toCharmNum: t.propUseNum * _.receive
                                    };
                                    console.log("显示魅力值变化", h), l.dispatch(r.EVENT_SHOW_CHARM_CHANGE, h), s = !0;
                                    break
                                }
                            }
                }, u.reqDiamondConfig = function(e, t) {
                    if (t && (t.tag && ("help" === t.tag ? t.cmd = d.PHP_DIAMOND_DMDCAPTION : "tab" === t.tag ? t.cmd = d.PHP_DIAMOND_DMDINIT : "list" === t.tag ? t.cmd = d.PHP_DIAMOND_DMDTABGOODS : "record" === t.tag && (t.cmd = d.PHP_SHOP_DIAMOND_RECORD)), t.cmd)) {
                        var i = {
                            cmd: t.cmd,
                            body: t.param
                        };
                        l.dispatch(r.NET_SEND_MSG, i)
                    }
                }, u.reqDiamondBuy = function(e, t) {
                    var i = {
                        cmd: d.PHP_SHOP_DIAMOND_BUY,
                        body: t
                    };
                    this._exchangeNum = t.num || 1, l.dispatch(r.NET_SEND_MSG, i)
                }, u.onDiamondShopEventTab = function(e, t, i) {
                    console.log("返回兑换商城tab配置", t, i), t || (i = []), o.ExchangeShop.setExchangeData(i, o.User.getUserMid())
                }, u.onDiamondShopList = function(e, t, i, n) {
                    o.ExchangeShop.updateShopList(i, n), l.dispatch(r.VIEW_DIAMOND_REFRESH, {
                        tag: "shopList",
                        info: i
                    })
                }, u.onDiamondHelp = function(e, t, i, n) {
                    o.ExchangeShop.setHelpInfo(i)
                }, u.onDiamondBuy = function(e, t, i, n) {
                    if (console.log("兑换商城，兑换结果", t, i, n), t) {
                        if (!a.table_isEmpty(i)) {
                            t = !0, i.flag = a.number_valueOf(i.flag);
                            var u = !1;
                            if (i.flag == o.ExchangeShop.eGoodsType.Gold) u = !0, null != i.totalMoney ? o.User.updateUserMoneyByID(0, i.totalMoney) : null != i.addMoney && o.User.updateUserMoneyByID(0, i.addMoney + o.User.getUserMoneyByID(0));
                            else if (i.flag == o.ExchangeShop.eGoodsType.GoldBar) {
                                u = !0;
                                var d = s.PropertyType.GOLD_BAR;
                                null != i.totalGoldBar ? o.User.updateUserMoneyByID(d, i.totalGoldBar) : null != i.addGoldBar && o.User.updateUserMoneyByID(d, i.addGoldBar + o.User.getUserMoneyByID(d))
                            } else i.flag, o.ExchangeShop.eGoodsType.RealGoods;
                            null != i.totalJyb && o.User.updateUserMoneyByID(s.PropertyType.DIAMOND, i.totalJyb);
                            var h = o.ExchangeShop.updateGoodNums(null == n ? void 0 : n.gid, this._exchangeNum);
                            if (u) {
                                var p = o.ExchangeShop.getGoodByGid(null == n ? void 0 : n.gid);
                                if (p) {
                                    var f = [{
                                        name: p.gname,
                                        icon: p.url,
                                        num: this._exchangeNum
                                    }];
                                    l.dispatch(r.VIEW_UI_OPEN, c.GetPropPrefab, f)
                                }
                            } else _.getInstance().showToast("恭喜您兑换成功，请耐心等待发货！");
                            if (l.dispatch(r.VIEW_DIAMOND_REFRESH, {
                                    tag: "buy",
                                    gid: null == n ? void 0 : n.gid,
                                    goods: h
                                }), null != i.prop_type) {
                                var m = [{
                                    boxItemID: a.number_valueOf(i.prop_type),
                                    changeNum: a.number_valueOf(i.totalNum),
                                    ignore_gatherId: !0
                                }];
                                o.BackPack.updateBagDataByChangeData(m)
                            }
                        }
                    } else _.getInstance().showToast(i.errorTips)
                }, u.onDiamondRecord = function(e, t, i, n) {
                    console.log("兑换记录", t, i), t || (i = {}), o.ExchangeShop.setRecordList(i)
                }, u.reqBagCode = function(e, t) {
                    if (t) {
                        var i = {
                            cmd: d.PHP_PACKAGE_CODE,
                            body: {
                                boxItemID: t.boxItemID || 0,
                                phone: t.phone || 0
                            }
                        };
                        l.dispatch(r.NET_SEND_MSG, i)
                    }
                }, u.respBagCode = function(e, t, i, n) {
                    console.log("背包道具验证码数据返回", t, i, n), l.dispatch(r.NOTICE_RESP_USER_BACKPACK_CODE, t)
                }, u.reqVipConfig = function(e, t) {
                    var i = {
                        cmd: d.PHP_VIP_CONF,
                        body: {}
                    };
                    l.dispatch(r.NET_SEND_MSG, i)
                }, u.respVipConfig = function(e, t, i, n) {
                    console.log("VIP配置数据返回", t, i, n), t ? o.User.setVipConfigData(i || {}) : l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.reqVipReward = function(e, t) {
                    var i = {
                        cmd: d.PHP_VIP_GIFT_REWARD,
                        body: {
                            type: t.type || 1,
                            level: t.level || 1
                        }
                    };
                    l.dispatch(r.NET_SEND_MSG, i), console.log("请求VIP礼包奖励")
                }, u.respVipReward = function(e, t, i, n) {
                    if (console.log("VIP礼包奖励数据返回", t, i, n), t) {
                        var a = i.award,
                            u = [];
                        a && (a.forEach((function(e) {
                            var t = o.PropsConf.getPropsInfoById(e.type ? e.type : 0),
                                i = o.PropsConf.getPropIconUrlByID(e.type ? e.type : 0);
                            console.log("VIPrewardConf", t, i);
                            var n = {
                                icon: i,
                                name: t.item_name,
                                num: e.num
                            };
                            u.push(n);
                            var a = parseInt(e.type),
                                r = parseInt(e.num);
                            if (a == s.PropertyType.SILVER_COIN) {
                                var c = o.User.getUserMoneyByID(a);
                                o.User.updateUserMoneyByID(a, c + r)
                            }
                        })), l.dispatch(r.VIEW_UI_OPEN, c.GetPropPrefab, u)), l.dispatch(r.NET_REQ_VIP_CONFIG)
                    } else l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.reqDecorationConfig = function(e, t) {
                    this.print("装扮配置数据请求", t);
                    var i = (null == t ? void 0 : t.type) || 1,
                        n = {
                            cmd: d.PHP_GET_DECORATION_CONFIG,
                            body: {
                                type: i,
                                cli_ver: o.DecorationData.getDecorationConfigVersion(i) || 0
                            }
                        };
                    l.dispatch(r.NET_SEND_MSG, n)
                }, u.respDecorationConfig = function(e, t, i, n) {
                    this.print("装扮配置数据返回", t, i, n), t ? a.table_isEmpty(i.data) || (o.DecorationData.updateDecorationConfig(i, null == n ? void 0 : n.type), l.dispatch(r.EVENT_UPDATE_DECORATION_CONFIG)) : l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.reqDecorationUserInfo = function(e, t) {
                    this.print("装扮用户数据请求", t);
                    var i = {
                        cmd: d.PHP_GET_DECORATION_USER_INFO,
                        body: {}
                    };
                    l.dispatch(r.NET_SEND_MSG, i)
                }, u.respDecorationUserInfo = function(e, t, i, n) {
                    this.print("装扮用户数据返回", t, i, n), t ? (o.DecorationData.updateDecorationUserInfo(i), l.dispatch(r.EVENT_UPDATE_DECORATION_USER_INFO), this.updateTimeList()) : l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.reqUseDecoration = function(e, t) {
                    this.print("装扮使用请求", t);
                    var i = {
                        cmd: d.PHP_USE_DECORATION,
                        body: {
                            type: (null == t ? void 0 : t.type) || 0,
                            propsType: (null == t ? void 0 : t.propsType) || 0,
                            extra_info: (null == t ? void 0 : t.extra_info) || {}
                        }
                    };
                    l.dispatch(r.NET_SEND_MSG, i)
                }, u.respUseDecoration = function(e, t, i, n) {
                    this.print("装扮使用返回", t, i, n), t ? (o.DecorationData.updateUseDecoration(i, null == n ? void 0 : n.extra_info), l.dispatch(r.EVENT_UPDATE_USE_DECORATION)) : l.dispatch(r.SYS_TOAST_TIP, {
                        content: i.errorTips
                    })
                }, u.updateTimeList = function() {
                    var e = this,
                        t = o.DecorationData.getDecorationUserInfo();
                    this.stopScheduler(this._updateTimehandler), this._updateTimeList = [], this._updateTimeMap = {};
                    var i = o.User.getServerTime();
                    if (this.print("装扮列表 serverTime", i), null != t && t.have_props)
                        for (var n in t.have_props) {
                            var a = t.have_props[n];
                            a.expires > 0 && this.addMatchTimeListItem(a.expires + 2, r.NET_REQ_DECORATION_USER_INFO, null)
                        }
                    this._updateTimeList.sort((function(e, t) {
                        return t - e
                    })), this.print("装扮定时器启动", this._updateTimeList), this._updateTimehandler = this.addScheduler(1, (function() {
                        if (e._updateTimeList.length > 0) {
                            for (var t = o.User.getServerTime(), i = {}, n = e._updateTimeList.length - 1; n >= 0; n--) {
                                var a = e._updateTimeList[n];
                                if (a <= t) {
                                    for (var r in e._updateTimeMap[a]) i[r] ? i[r] = i[r].concat(e._updateTimeMap[a][r]) : i[r] = e._updateTimeMap[a][r];
                                    e._updateTimeList.pop(), e._updateTimeMap[a] = null
                                }
                            }
                            for (var s in i) {
                                e.print("装扮定时器触发事件", s, i[s]);
                                var c = !1;
                                if (i[s])
                                    for (var u = 0; u < i[s].length; u++) i[s][u] ? (e.print("装扮定时器处理有参事件", s, i[s][u]), l.dispatch(s, i[s][u])) : c = !0;
                                c && (e.print("赛定时器处理无参事件", s), l.dispatch(s))
                            }
                        }
                    }))
                }, u.addMatchTimeListItem = function(e, t, i) {
                    var n;
                    this._updateTimeMap[e] ? this._updateTimeMap[e][t] ? this._updateTimeMap[e][t].push(i) : this._updateTimeMap[e][t] = [i] : (this._updateTimeMap[e] = ((n = {})[t] = [i], n), this._updateTimeList.push(e))
                }, u.removeMatchTimeListItemByEvent = function(e) {
                    if (this._updateTimeList.length > 0)
                        for (var t = this._updateTimeList.length - 1; t >= 0; t--) {
                            var i = this._updateTimeList[t],
                                n = this._updateTimeMap[i];
                            n[e] && (n[e] = null)
                        }
                }, i
            }(u))._instance = null, i._RF.pop()
        }
    }
}))