System.register("chunks:///_virtual/ShopInfo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./Encrypto.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.AppEvent
        }, function(e) {
            r = e.GConstants
        }, function(e) {
            s = e.Encrypt
        }, function(e) {
            c = e.EventManager
        }, function(e) {
            l = e.BaseCache
        }],
        execute: function() {
            var u;
            n._RF.push({}, "4cd99d4eolEBqO+AILZj7YQ", "ShopInfo", void 0), e("ShopInfo", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "ShopInfo") || this).__User = null, i._shopList = {}, i._shopTab = {}, i._shopSubTab = {}, i._shopData = {}, i.__User = t, i
                }
                t(n, e);
                var l = n.prototype;
                return l.getGoodsTypeNameByScene = function(e) {
                    var t = "银币";
                    if (e) {
                        var i = r.getGoodsTypeNameByScene.find((function(t) {
                            return t.scene == e
                        }));
                        !i || (t = i.name)
                    }
                    return t
                }, l.update = function(e) {
                    var t, i = this;
                    if (!a.table_isEmpty(e) && null != e.scene) {
                        var n = a.clone(e);
                        Object.keys(r.ShopBigTabType).forEach((function(e) {
                            r.ShopBigTabType[e] == n.scene && (i._shopTab[n.scene] = n)
                        })), n.subTab = a.table_verify(n.subTab, !0), n.subTab.length > 1 || (n.subTab = [], n.subTab.push({
                            cid: n.scene,
                            order: 1,
                            name: this.getGoodsTypeNameByScene(n.scene),
                            gList: n.ginfo
                        }), this._shopSubTab[n.scene] = n.subTab, Object.keys(r.ShopBigTabType).forEach((function(e) {
                            r.ShopBigTabType[e] == n.scene && (i._shopData[String(n.scene)] = n.subTab[0])
                        }))), a.table_isEmpty(null == (t = this._shopList[n.scene]) ? void 0 : t.ginfo) ? this._shopList[n.scene] = n : this._shopList[n.scene].ginfo = a.mergeObject(this._shopList[n.scene].ginfo, n.ginfo), c.dispatch(o.ACTIVITY_SHOPLIST_UPDATE, n.scene), c.dispatch(o.NOTIFY_UPDATE_RED_DOT, r.RedDotConf.Shop), console.log("商城数据：this._shopData", this._shopData), console.log("所有商城意义下的数据：this._shopList==>", this._shopList)
                    }
                }, l.isExitFreeGoods = function(e) {
                    var t = this;
                    void 0 === e && (e = r.ShopBigTabType.SILVER_COIN);
                    var i = {},
                        n = !1;
                    return Object.keys(this._shopList).forEach((function(o) {
                        0 != e && Number(o) != e || (i = t._shopList[o].ginfo, Object.keys(i).forEach((function(e) {
                            if (Number(i[e].currency) == r.PayType.SHARE) {
                                var t = a.number_valueOf(i[e].limit_buy_num),
                                    o = a.number_valueOf(i[e].bought_num);
                                (0 == t || o < t) && (n = !0)
                            }
                        })))
                    })), n
                }, l._onGoodsBuySucc = function(e, t) {
                    e = e || 0, t = t || {};
                    var i = this.getShopDataByGoodsID(e);
                    a.table_isEmpty(i) || (i.isHave = r.goodsIsHave.isHave, Number(i.bought_num) >= 0 && t.finish_num && (i.bought_num = t.finish_num), console.log("当前商品已分享次数", i.bought_num), c.dispatch(o.NOTIFY_GOODS_CHANGE, i), c.dispatch(o.NOTIFY_UPDATE_RED_DOT, r.RedDotConf.Shop))
                }, l.getPriceByResId = function(e, t) {
                    e = Number(e), t = Number(t);
                    var i = null,
                        n = this._getDataBySubType(e).ginfo || {};
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a) && null == i) {
                            var o = n[a];
                            o.gid == t && o.currency && o.price && ((i = {}).payID = o.currency, i.price = o.price, i.goodsID = o.gid, i.name = o.name, i.icon = o.icon, i.desc = o.desc || "", i.limit_buy_way = o.limit_buy_way || "0", i.limit_buy_num = o.limit_buy_num, i.bought_num = o.bought_num)
                        } return i || (i = {
                        payID: 0,
                        price: 0,
                        isEmpty: !0
                    }), i
                }, l.getPriceByResType = function(e, t) {
                    e = Number(e), t = Number(t);
                    var i = null,
                        n = this._getDataBySubType(e).ginfo || {};
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a) && null == i) {
                            var o = n[a];
                            o.goods_id == t && o.currency && o.price && ((i = {}).payID = o.currency, i.price = o.price, i.goodsID = o.gid, i.name = o.name, i.icon = o.icon, i.desc = o.desc || "", i.limit_buy_way = o.limit_buy_way || "0", i.limit_buy_num = o.limit_buy_num, i.bought_num = o.bought_num)
                        } return i || (i = {
                        payID: 0,
                        price: 0,
                        isEmpty: !0
                    }), i
                }, l.getGoodInfoByResId = function(e, t) {
                    e = Number(e), t = Number(t);
                    var i = this._getDataBySubType(e).gList || {},
                        n = null;
                    for (var a in i)
                        if (Object.prototype.hasOwnProperty.call(i, a) && null == n)
                            for (var o in i[a].res) Object.prototype.hasOwnProperty.call(i[a].res, o) && null == n && i[a].res[o].resID == t && (n = i[a]);
                    return n || {}
                }, l.getPriceByGoodsSceneId = function(e, t) {
                    var i = this;
                    e = Number(e), t = Number(t);
                    var n = null;
                    return Object.keys(this._shopList).forEach((function(o) {
                        if (e == Number(o)) {
                            var r = i._shopList[e].ginfo;
                            Object.keys(r).forEach((function(o) {
                                t == Number(o) && (n = {
                                    payID: Number(r[t].currency),
                                    price: a.number_valueOf(r[t].price),
                                    original_price: a.number_valueOf(r[t].original_price),
                                    isEmpty: !1,
                                    name: r[t].name,
                                    icon: r[t].icon,
                                    desc: r[t].desc,
                                    limit_buy_way: r[t].limit_buy_way,
                                    limitNum: Number(r[t].limit_buy_num),
                                    boughtNum: Number(r[t].bought_num),
                                    share_id: r[t].share_id,
                                    reward: r[t].award || [],
                                    specialDesc: r[t].specialDesc || "",
                                    number: r[t].number || "",
                                    zoneId: a.number_valueOf(r[t].zoneId, 1),
                                    id: t,
                                    currency: Number(r[t].currency),
                                    pamount: a.number_valueOf(r[t].price, 0),
                                    pchips: a.number_valueOf(r[t].number),
                                    pmodes: i.__getGoodsPmodes(r[t].pmodes),
                                    scene: e
                                }).limitNum > 0 && (n.boughtNum = n.boughtNum > n.limitNum ? n.limitNum : n.boughtNum)
                            }))
                        }
                    })), n || {
                        payID: 0,
                        price: 0,
                        isEmpty: !0
                    }
                }, l.__getGoodsPmodes = function(e) {
                    e = a.nullToDefault(e, "");
                    var t = s.JsonDecode(e);
                    t = a.table_verify(t);
                    for (var i = [], n = 0; n < t.length; n++)
                        if (0 == a.table_isEmpty(t[n]) && 0 == a.isNull(t[n].id)) {
                            var o = this.mergeArrayDefault({
                                name: "",
                                id: "0",
                                icon: null,
                                num: 0
                            }, t[n]);
                            o.name = t[n].n, i.push(o)
                        } return i
                }, l.isExitByGoodsid = function(e) {
                    if (e = Number(e), isNaN(e)) return !1;
                    var t = !1;
                    for (var i in this._shopList)
                        if (Object.prototype.hasOwnProperty.call(this._shopList, i) && 0 == t) {
                            var n = this._shopList[i].ginfo || {};
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && 0 == t && n[a].gid == e && (t = !0)
                        } return t
                }, l.getShopDataByGoodsID = function(e) {
                    var t = this;
                    if ((e = Number(e)) <= 0) return null;
                    var i = {};
                    return Object.keys(this._shopList).forEach((function(n) {
                        if (t._shopList[n] && t._shopList[n].ginfo) {
                            var o = t._shopList[n].ginfo;
                            if (o && (Object.keys(o).forEach((function(t) {
                                    e != Number(t) || ((i = o[e]).scene = Number(n))
                                })), !a.table_isEmpty(i))) return
                        }
                    })), i
                }, l.detailPrice = function(e) {
                    for (var t = 0; t < e.length; t++)
                        for (var i = e[t], n = 0; n < i.pay.length; n++) {
                            var a = i.pay[n];
                            1 == this.isRMB(a.payID) && (a.oldPrice = a.oldPrice / 100, a.price = a.price / 100)
                        }
                }, l.isRMB = function(e) {
                    return (e = a.number_valueOf(e)) != r.PayType.FREE && e != r.PayType.SILVER && e != r.PayType.TICKET && e != r.PayType.SHARE && e != r.PayType.VIDEO
                }, l.getSubTbs = function(e) {
                    if (e && this._shopSubTab[e]) return this._shopSubTab[e]
                }, l._getDataBySubType = function(e) {
                    if ((e = String(e)) && this._shopList && this._shopList[e]) {
                        var t = this._shopList[e];
                        return a.clone(t)
                    }
                    return {}
                }, l.getDataList = function(e) {
                    var t = [],
                        i = this._getDataBySubType(e);
                    return a.table_isEmpty(i.ginfo) || Object.keys(i.ginfo).forEach((function(e) {
                        t.push(i.ginfo[e])
                    })), t.sort((function(e, t) {
                        return a.number_valueOf(e.item_order) - a.number_valueOf(t.item_order)
                    }))
                }, l.getLimitGift = function() {
                    return {}
                }, l.onUpdateGoods = function(e, t) {
                    null != e && t && this._onGoodsBuySucc(e, t)
                }, l.resetShopList = function() {
                    this._shopList = {}
                }, l.getShopList = function() {
                    return this._shopList
                }, l.checkGoodList = function(e) {
                    for (var t = 0, i = e.length; t < i; t++) {
                        var n = this._getDataBySubType(e[t]);
                        a.table_isEmpty(n.ginfo) && c.dispatch(o.NET_REQ_GOODS_INFO, {
                            scene: e[t]
                        })
                    }
                }, l.checkRoomGoodList = function() {
                    var e = [r.GoodsListID.Bankruptcy, r.GoodsListID.RoomLevelDown];
                    this.checkGoodList(e)
                }, l.getVedioShopInfo = function() {
                    for (var e = this.getDataList(r.ShopBigTabType.SILVER_COIN), t = {}, i = 0, n = null == e ? void 0 : e.length; i < n; i++) Number(e[i].currency) == r.PayType.VIDEO && (null == t.number || t.number > e[i].number) && (t = e[i]);
                    return a.number_valueOf(t.limit_buy_way) > 0 && null != t.bought_num && null != t.limit_buy_num && t.bought_num >= t.limit_buy_num && (t = {}), console.log("获取观看视频购买的商品信息", t), t
                }, i(n, [{
                    key: "shopTab",
                    get: function() {
                        return this._shopTab
                    }
                }]), n
            }(l)).TabConfig = ((u = {})[r.ShopBigTabType.SILVER_COIN] = [r.ShopSmallTabType.SILVER_COIN], u[r.ShopBigTabType.PROPS] = [r.ShopSmallTabType.PROPS], u), n._RF.pop()
        }
    }
}))