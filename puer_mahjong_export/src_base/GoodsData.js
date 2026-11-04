System.register("chunks:///_virtual/GoodsData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./Encrypto.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.Utils
        }, function(e) {
            a = e.GConstants
        }, function(e) {
            o = e.Encrypt
        }, function(e) {
            r = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "3bf36KCiuJBpqigOcgRXh0A", "GoodsData", void 0), e("GoodsData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "GoodsData") || this).__User = null, i._goodsData = {}, i._GoodsInfoList = {}, i._GoodsPayWaysList = {}, i._GoodsGiftList = {}, i.__User = t, i
                }
                t(i, e);
                var r = i.prototype;
                return r.update = function(e, t) {
                    if (t && t.content) switch (e) {
                        case a.UserGoodsDataType.GOODS_CONFIG:
                    }
                }, r.updateGoods = function(e) {
                    if (n.table_isEmpty(e)) return null;
                    var t = this.mergeArrayDefault({
                            ginfo: {},
                            paycfg: {},
                            scene: -1,
                            sceneinfo: {},
                            subTab: {}
                        }, e),
                        i = n.number_valueOf(t.scene);
                    return t.ginfo = this.updateGoodsInfoList(i, t.ginfo, t.paycfg), this._GoodsInfoList[i] = t, this._GoodsPayWaysList[i] = t.paycfg, this._GoodsGiftList[i] = t.ginfo, i
                }, r.getGoodsInfoByGoodsID = function(e) {
                    return this._GoodsInfoList[e] ? this._GoodsInfoList[e] : null
                }, r.getGoodsGiftByGoodsID = function(e) {
                    return this._GoodsGiftList[e] ? this._GoodsGiftList[e] : null
                }, r.getOneGoodGift = function(e, t) {
                    if (0 == n.isNotNull(e, t)) return {};
                    if (!this._GoodsGiftList[e]) return {};
                    t = n.number_valueOf(t, -1);
                    for (var i = this._GoodsGiftList[e], a = 0; a < i.length; a++)
                        if (n.number_valueOf(i[a].id) == t) return i[a];
                    return {}
                }, r.updateGoodsInfoList = function(e, t, i) {
                    if (n.isNull(e) || n.table_isEmpty(t)) return 0 == n.isNull(e) ? this._GoodsGiftList[e] : null;
                    i = n.table_verify(i);
                    var a = new Map;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var r = t[o],
                                s = {};
                            (s = {
                                scene: e,
                                id: n.number_valueOf(r.gid),
                                ptype: n.number_valueOf(r.ptype),
                                name: n.nullToDefault(r.name, ""),
                                icon: n.nullToDefault(r.icon, ""),
                                desc: n.nullToDefault(r.desc, ""),
                                specialDesc: n.nullToDefault(r.specialDesc, ""),
                                crystal: n.number_valueOf(r.crystal),
                                "crystalIcon ": n.nullToDefault(r.crystalIcon, ""),
                                pchips: n.number_valueOf(r.number),
                                eventIcon: 0 == n.string_isEmpty(r.eventIcon) ? r.eventIcon : "",
                                appstoreid: n.nullToDefault(r.appstoreid, ""),
                                privilegeIcon: n.nullToDefault(r.privilegeIcon, ""),
                                privilegeTips: n.nullToDefault(r.privilegeTips, ""),
                                order: n.number_valueOf(r.order),
                                goods_id: n.number_valueOf(r.goods_id),
                                switch: !0,
                                payCnHost: i.payCnHost,
                                pc_appid: i.pcAppid,
                                award: this.__analysisGoodAwardInfo(r.award),
                                currency: n.number_valueOf(r.currency, 1),
                                pamount: n.number_valueOf(r.price, 0),
                                pmodes: this.__getGoodsPmodes(r.pmodes),
                                currency_desc: "元",
                                priorityDesc: "",
                                isFlash: n.number_valueOf(r.isFlash, -1),
                                flash: n.number_valueOf(r.flash, -1),
                                zoneId: n.number_valueOf(r.zoneId, 1)
                            }).switch = n.number_valueOf(0 == r.visitSwitch), s.currency_desc = this.__getCurrencyDesc(s.currency), s.priorityDesc = this.__getDescByPriority(s.privilegeTips, s.specialDesc), a.set(s.id, s)
                        } if (a.size > 0) {
                        var c = [],
                            l = Array.from(a);
                        l.sort((function(e, t) {
                            return e[1].order - t[1].order
                        }));
                        for (var u = 0; u < l.length; u++) c.push(l[u][1]);
                        this._GoodsGiftList[e] = c
                    }
                    return this._GoodsGiftList[e]
                }, r.__analysisGoodAwardInfo = function(e) {
                    return n.isNull(e) ? {} : this.mergeArrayDefault({
                        id: -1,
                        n: 0
                    }, e)
                }, r.__getGoodsPmodes = function(e) {
                    e = n.nullToDefault(e, "");
                    var t = o.JsonDecode(e);
                    t = n.table_verify(t);
                    for (var i = [], a = 0; a < t.length; a++)
                        if (0 == n.table_isEmpty(t[a]) && 0 == n.isNull(t[a].id)) {
                            var r = this.mergeArrayDefault({
                                name: "",
                                id: "0",
                                icon: null,
                                num: 0
                            }, t[a]);
                            r.name = t[a].n, i.push(r)
                        } return i
                }, r.__getCurrencyDesc = function(e) {
                    var t = "元";
                    return e == a.GoodMoneyType.diamond ? t = "兑换券" : e == a.GoodMoneyType.gold && (t = "银币"), t
                }, r.__getDescByPriority = function(e, t) {
                    for (var i = [e, t], a = 0; a < i.length; a++)
                        if (0 == n.string_isEmpty(i[a])) return i[a];
                    return ""
                }, r.getGoodsData = function() {
                    return n.clone(this._goodsData)
                }, r.getGoodsByID = function(e) {
                    return null == e ? null : (e = String(e), null == this._goodsData[e] ? null : this._goodsData[e])
                }, r.getGoodNameByID = function(e) {
                    var t = this.getGoodsByID(e);
                    return null != t ? t.item_name : ""
                }, r.getGoodIconByID = function(e) {
                    var t = this.getGoodsByID(e);
                    return null != t ? t.item_res_url : ""
                }, r.getGoodItemKindByID = function(e) {
                    var t = this.getGoodsByID(e);
                    return null != t ? t.item_kind : null
                }, i
            }(r)), i._RF.pop()
        }
    }
}))