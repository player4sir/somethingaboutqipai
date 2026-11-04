System.register("chunks:///_virtual/BackPack.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass, n = e.assertThisInitialized
        }, function(e) {
            a = e.cclegacy
        }, function(e) {
            o = e.Utils
        }, function(e) {
            r = e.AppEvent
        }, function(e) {
            s = e.StoreKey, c = e.GConstants
        }, function(e) {
            l = e.EventManager
        }, function(e) {
            u = e.BaseCache
        }],
        execute: function() {
            a._RF.push({}, "1cbc6OFAbpFRJ14xl3bbnIO", "BackPack", void 0), e("BackPack", function(e) {
                function a(t) {
                    var i;
                    return (i = e.call(this, "BackPack") || this).BagTypeAdapter = {
                        s_shard: 1,
                        s_gitBag: 2,
                        s_general: 3,
                        s_offline: 4,
                        s_onlineEntity: 5,
                        s_onlineVirtual: 6,
                        s_generalNoNum: 7
                    }, i.__User = null, i.bagData = {
                        commonProp: [],
                        entity: []
                    }, i.exchangeHistory = [], i.needFillUnionPropsParams = void 0, i.needFillBasePropsParams = void 0, i.__User = t, i.bagData = {
                        commonProp: [],
                        entity: []
                    }, l.addListener(r.NET_GET_PROPS_CONF, i.onGetPropsConf, n(i)), i
                }
                t(a, e);
                var u = a.prototype;
                return u.getClientType = function(e, t) {
                    var i = null;
                    return 0 == e ? i = this.BagTypeAdapter.s_general : 1 == e ? 1 == t ? i = this.BagTypeAdapter.s_onlineVirtual : 2 == t ? i = this.BagTypeAdapter.s_onlineEntity : console.log("BagTypeAdapter.getClientType没有匹配的类型", t) : 2 == e ? i = this.BagTypeAdapter.s_gitBag : 3 == e ? i = this.BagTypeAdapter.s_shard : 4 == e ? i = this.BagTypeAdapter.s_offline : console.log("BagTypeAdapter.getClientType没有匹配的类型", t), i
                }, u.filterExpireProp = function() {
                    for (var e in this.bagData)
                        if (Object.prototype.hasOwnProperty.call(this.bagData, e))
                            for (var t = this.bagData[e], i = t.length - 1; i >= 0; i--) t[i].day >= 0 && t[i].expiresTime && t[i].expiresTime <= (new Date).getTime() / 1e3 && t.splice(i, 1)
                }, u.getDataByBoxItemID = function(e) {
                    for (var t = Object.keys(this.bagData), i = 0; i < t.length; i++)
                        for (var n = this.bagData[t[i]], a = 0; a < n.length; a++)
                            if (e === n[a].boxItemID) return n[a]
                }, u.updatePropNum = function(e) {
                    if (null != e.propsNum)
                        for (var t = Object.keys(this.bagData), i = 0; i < t.length; i++)
                            for (var n = this.bagData[t[i]], a = 0; a < (null == n ? void 0 : n.length); a++)
                                if (e.propId === n[a].boxItemID) return void(this.bagData[t[i]][a].number = e.propsNum)
                }, u.onGetBagListAllData = function(e) {
                    this.bagData = {
                        commonProp: [],
                        entity: []
                    }, o.table_isEmpty(this.__User.PropsConf.getBaseProps()) ? this.needFillBasePropsParams = !0 : o.table_isEmpty(this.__User.PropsConf.getUnionProps()) && (this.needFillUnionPropsParams = !0), this._analysisData(e), e.sort((function(e, t) {
                        return o.number_valueOf(e.sort) - o.number_valueOf(t.sort)
                    })), console.log("获得最新的背包数据", this.bagData), l.dispatch(r.NET_CMD_RESP_USER_BACKPACK_END, this.bagData)
                }, u._analysisData = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = !o.table_isEmpty(i.reverse),
                            a = this.getClientType(o.number_valueOf(i.boxType), o.number_valueOf(i.smallType, -1)),
                            r = o.number_valueOf(i.boxItemID),
                            s = this.__User.PropsConf.getPropsInfoById(r),
                            c = {
                                boxItemID: r,
                                sort: o.number_valueOf(i.sort),
                                serverType1: o.number_valueOf(i.boxType),
                                serverType2: o.number_valueOf(i.smallType, -1),
                                isCanUse: o.number_valueOf(i.isBoxUse),
                                number: o.number_valueOf(i.itemNum),
                                gatherId: o.number_valueOf(i.gatherId),
                                day: o.number_valueOf(i.expires, -1),
                                compoundNum: o.number_valueOf(i.compoundNum),
                                twoDimensionCodePath: i.qrcode,
                                address: i.address || [],
                                phone: i.phone || [],
                                isGeted: o.number_valueOf(i.status, 1),
                                twoDimensionCodeText: i.conditionCode || "",
                                matchName: i.matchName || "",
                                starttime: o.number_valueOf(i.starttime),
                                expiresSec: o.number_valueOf(i.expiresSec),
                                expiresTime: o.number_valueOf(i.expiresTime),
                                prizeDesc: i.prizeDesc || "",
                                goodsID: o.number_valueOf(i.goods_id),
                                compoundTable: i.compound || [],
                                reverse: i.reverse || [],
                                canExchange: n,
                                clientType: a,
                                desc: s.item_desc || "",
                                typeDes: s.type_desc || "",
                                name: s.item_name || "",
                                primpType: s.primp_type || 0,
                                clientPhoneNunber: ""
                            };
                        i.jd_new_ver && (c.jd_new_ver = i.jd_new_ver), a == this.BagTypeAdapter.s_onlineVirtual || a == this.BagTypeAdapter.s_offline || a == this.BagTypeAdapter.s_onlineEntity ? this.bagData.entity.push(c) : this.bagData.commonProp.push(c)
                    }
                }, u.onGetPropsConf = function(e, t) {
                    (t == s.PROPS_BASE_CONF && this.needFillBasePropsParams || t == s.PROPS_UNION_CONF && this.needFillUnionPropsParams) && this.fillPropsParams()
                }, u.fillPropsParams = function() {
                    for (var e = Object.keys(this.bagData), t = 0; t < e.length; t++)
                        for (var i = this.bagData[e[t]], n = 0; n < i.length; n++) {
                            var a = i[n],
                                o = this.__User.PropsConf.getPropsInfoById(a.boxItemID);
                            a.desc = o.item_desc || "", a.typeDes = o.type_desc || "", a.name = o.item_name || "", a.primpType = o.primp_type || 0
                        }
                }, u.updateBagDataByChangeData = function(e) {
                    var t = this;
                    if (0 !== e.length && 98 !== e[0].boxItemID) {
                        var i = [];
                        e.forEach((function(e) {
                            var n = o.number_valueOf(e.boxItemID, -1);
                            if (null != e.boxItemID && n >= 0)
                                if (c.PropertyType.SILVER_COIN <= n && n <= c.PropertyType.DIAMOND) {
                                    var a = t.__User.getUserMoneyByID(n);
                                    t.__User.updateUserMoneyByID(n, a + o.number_valueOf(e.changeNum))
                                } else {
                                    parseInt(e.changeNum, 10);
                                    for (var s = !1, u = Object.keys(t.bagData), d = 0; d < u.length; d++)
                                        for (var _ = t.bagData[u[d]], h = 0; h < _.length; h++) {
                                            var p = _[h];
                                            if (o.number_valueOf(e.boxItemID) === p.boxItemID && (1 == e.ignore_gatherId || o.number_valueOf(e.gatherId) === p.gatherId)) {
                                                s = !0, p.number = o.number_valueOf(e.changeNum) + o.number_valueOf(p.number), p.number <= 0 && _.splice(h, 1);
                                                break
                                            }
                                        }!s && o.number_valueOf(e.changeNum) > 0 && (e.itemNum = e.changeNum, i.push(e)), 58 == n && (t.__User.updateUserMoneyByID(c.PropertyType.DIAMOND, e.itemNum || 0), l.dispatch(r.UPDATE_USER_EXCHANGE_TICKET_CHANGE))
                                }
                        })), this._analysisData(i), (null == i ? void 0 : i.length) > 0 && l.dispatch(r.NET_CMD_REQ_USER_BACKPACK), l.dispatch(r.NET_CMD_RESP_USER_BACKPACK_CHANGE)
                    }
                }, i(a, [{
                    key: "BagData",
                    get: function() {
                        return this.bagData
                    }
                }]), a
            }(u)), a._RF.pop()
        }
    }
}))