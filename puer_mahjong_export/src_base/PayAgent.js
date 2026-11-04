System.register("chunks:///_virtual/PayAgent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./GameTxt.ts", "./Logger.ts", "./Utils.ts", "./GCache.ts", "./AppEvent.ts", "./GameConstant.ts", "./UIConfig.ts", "./EventManager.ts", "./BaseController.ts", "./Platform.ts", "./OrderRecode.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _, h, p;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.ClientInfo
        }, function(e) {
            a = e.GameTxt
        }, function(e) {
            o = e.Logger
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
            d = e.EventManager
        }, function(e) {
            _ = e.BaseController
        }, function(e) {
            h = e.Platform
        }, function(e) {
            p = e.OrderRecode
        }],
        execute: function() {
            i._RF.push({}, "34ce3939gpAjb3OP+FVh6vC", "PayAgent", void 0);
            var f = {};
            e("PayAgent", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "PayAgent") || this)._data = null, i._code = null, i._currowGoodGift = null, i._doPayCallback = null, i._zoneId = 1, i._orderParam = null, i._payParam = null, i._orderReportParam = null, i.print = function() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        o.logPay.apply(o, [5].concat(t))
                    }, i
                }
                t(i, e), i.getInstance = function() {
                    return this._instance && null != this._instance || (this._instance = new i("PayAgent")), this._instance
                };
                var _ = i.prototype;
                return _.startPay = function(e) {
                    this._data = e, this._code = r.timeEx(), this._orderParam = null, this._payParam = null, this._orderReportParam = null, this._doPayCallback = r.handler(this, this.doPayCallback), this.print("MID:" + s.User.getUserMid() + ",请求了支付,数据为:", this._data), r.isNotNull(this._data, this._data.scene, this._data.gid) ? this.doCheck() : this.dump(this._data, "错误的支付代理参数")
                }, _.doCheck = function(e) {
                    var t, i;
                    if (0 != r.isNotNull(this._data, this._data.scene, this._data.gid)) {
                        var n = r.number_valueOf(f[this._data.scene], 0) + 1;
                        if (f[this._data.scene] = n, this._currowGoodGift = s.ShopInfo.getPriceByGoodsSceneId(this._data.scene, this._data.gid), console.log("this._currowGoodGift", this._currowGoodGift), null != (t = this._currowGoodGift) && t.isEmpty) return console.log("商品信息错误------------"), void d.dispatch(c.NET_REQ_GOODS_INFO, {
                            scene: this._data.scene,
                            code: this._code
                        });
                        this._zoneId = r.nullToDefault(null == (i = this._currowGoodGift) ? void 0 : i.zoneId, 1), this.doPay()
                    } else this.print("错误的支付代理参数")
                }, _.doPay = function() {
                    if (0 != r.isNotNull(this._currowGoodGift)) switch (this._currowGoodGift.currency) {
                        case l.GoodMoneyType.rmb:
                            var e = r.nullToDefault(this._currowGoodGift.pamount, null);
                            if (!e) return this.print("支付失败，价格配置错误"), void this.doEnd();
                            if (0 == this.createOrderParam()) return this.print("支付失败，订单参数生成有误"), void this.doEnd();
                            this.sendPayMsg({
                                num: e,
                                callback: this._doPayCallback,
                                code: this._code,
                                scene: this._data.scene,
                                gid: this._data.gid,
                                zoneId: this._zoneId
                            });
                            break;
                        case l.GoodMoneyType.diamond:
                            return this.print("支付失败，支付代理暂时不支持钻石支付"), void this.doEnd();
                        case l.GoodMoneyType.gold:
                            this.print("支付失败，支付代理暂时不支持金条支付"), this.doEnd();
                            break;
                        default:
                            return this.print("支付失败，不支持的支付类型 type = " + this._currowGoodGift.currency), void this.doEnd(a.pay_fail_no_goods)
                    } else this.doEnd(a.pay_fail_no_goods)
                }, _.sendPayMsg = function(e) {
                    p.getInstance().setReportData(this._orderReportParam), this._payParam = e, p.getInstance().reqSendOrder(this._orderParam, e)
                }, _.createOrderParam = function() {
                    if (!this._currowGoodGift) return !1;
                    o.dump("创建订单参数", this._currowGoodGift);
                    var e = {
                        item_id: this._currowGoodGift.id,
                        gid: this._currowGoodGift.id,
                        ptype: l.WECHAT_PAYTYPE.WECHAT,
                        sceneId: this._data.scene,
                        v: 1 == h.isAndroid() ? 2 : 0,
                        operation: n.PhoneCardType,
                        bundleId: n.BundleId,
                        mobileid: 0,
                        hall_version: n.HallVer,
                        pamount: this._currowGoodGift.pamount,
                        goodsPrice: 100 * this._currowGoodGift.pamount
                    };
                    if (this._currowGoodGift.extra)
                        for (var t in this._currowGoodGift.extra)
                            if (Object.prototype.hasOwnProperty.call(this._currowGoodGift.extra, t)) {
                                var i = this._currowGoodGift.extra[t];
                                "string" != typeof i && "number" != typeof i && "boolean" != typeof i || (e[t] = i)
                            } if (this._data._extra)
                        for (var a in this._data._extra)
                            if (Object.prototype.hasOwnProperty.call(this._data._extra, a)) {
                                var s = this._data._extra[a];
                                "string" != typeof s && "number" != typeof s && "boolean" != typeof s || (e[a] = s)
                            } this._orderParam = e;
                    var c = 0;
                    this._currowGoodGift.pmodes && this._currowGoodGift.pmodes.length > 0 && (c = this._currowGoodGift.pmodes[0].id);
                    var u = {
                        orderID: null,
                        gameID: r.number_valueOf(this._data.otherEx.gameID),
                        levelID: r.number_valueOf(this._data.otherEx.levelID),
                        pmode: c,
                        currency: this._currowGoodGift.currency,
                        pamount: this._currowGoodGift.pamount,
                        scene: this._currowGoodGift.scene,
                        id: this._currowGoodGift.id,
                        pchips: this._currowGoodGift.pchips,
                        sceneType: this._data.sceneType
                    };
                    return this._orderReportParam = u, !0
                }, _.doPayCallback = function(e) {
                    if (e)
                        if (this.print("MID:" + s.User.getUserMid() + ",平台支付结果:" + e), e.respCode, l.AppPayResult.UNINE, e.respCode == l.AppPayResult.SUCCESS) d.dispatch(c.SYS_TOAST_TIP, {
                            content: a.pay_success
                        });
                        else {
                            var t = null,
                                i = this;
                            if (e.msg) {
                                var n = r.number_valueOf(e.msg.errCode);
                                t = a.pay_error_codelist[n]
                            }
                            var o = {
                                title: "支付失败",
                                txt_desc: "" + (t || a.pay_fail_platform_error) + a.pay_fail_nofify,
                                alignLeftTop: !1,
                                notshowClose: !1,
                                buttonsMap: [{
                                    label: "重新支付",
                                    click: function() {
                                        i._orderParam && i._payParam && p.getInstance().reqSendOrder(i._orderParam, i._payParam)
                                    }
                                }]
                            };
                            h.isIOS() && o.buttonsMap.push({
                                label: "支付指引",
                                click: function() {
                                    d.dispatch(c.VIEW_UI_OPEN, u.NoticePopuPrefab, {
                                        noticeName: "支付操作指引"
                                    }, null, null, null, !0), i.release()
                                }
                            }), d.dispatch(c.VIEW_UI_OPEN, u.PopWindow, o)
                        }
                }, _.doEnd = function(e) {
                    void 0 === e && (e = null), 0 == r.string_isEmpty(e) && d.dispatch(c.SYS_TOAST_TIP, {
                        content: e
                    }), this.release()
                }, _.release = function() {
                    e.prototype.clear.call(this)
                }, i
            }(_))._instance = null, i._RF.pop()
        }
    }
}))