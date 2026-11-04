System.register("chunks:///_virtual/exchangeShop.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s;
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
            o = e.AppEvent
        }, function(e) {
            r = e.EventManager
        }, function(e) {
            s = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "3cb21zdPfVFipJ06FD25L2i", "exchangeShop", void 0), e("ExchangeShop", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "ExchangeShop") || this).eGoodsType = {
                        Gold: 1,
                        TelCharge: 2,
                        RealGoods: 3,
                        FlowPack: 4,
                        GoldBar: 5,
                        JDCare: 6
                    }, i.eGoodsShowType = {
                        Normal: 1,
                        Sales: 2
                    }, i.ALLOW_STATUS = {
                        NONE: 1,
                        LIMIT: -1,
                        OVER: -2
                    }, i.exchangeData = [], i.exchangeHistory = [], i.shopList = {}, i.helpList = {}, i.recordList = [], i._totalPage = 0, i._curPage = 0, i._redrod_time = 0, i._good_time = 0, i
                }
                t(i, e);
                var s = i.prototype;
                return s.getExchangeData = function() {
                    return this.exchangeData
                }, s.setExchangeData = function(e, t) {
                    var i;
                    this.exchangeData = e || [], Array.isArray(this.exchangeData) && (null == (i = this.exchangeData) || i.sort((function(e, t) {
                        return e.sort - t.sort
                    }))), this._checkHelpInfo(t)
                }, s.setHelpInfo = function(e) {
                    this.helpList = e || {}
                }, s.getHelpInfo = function() {
                    return this.helpList || {}
                }, s._checkHelpInfo = function(e) {
                    a.table_isEmpty(this.helpList) && r.dispatch(o.REQ_DIAMOND_SHOP_CONFIG, {
                        tag: "help",
                        param: {
                            mid: e,
                            appid: n.deviceInfo.AppId
                        }
                    })
                }, s.getShopListByType = function(e, t) {
                    var i = this.shopList[e.toString()] || [];
                    return a.table_isEmpty(i) && (0 == this._good_time || a.time() - this._good_time >= 1) && (this._good_time = a.time(), r.dispatch(o.REQ_DIAMOND_SHOP_CONFIG, {
                        tag: "list",
                        param: {
                            dmdtabid: Number(e),
                            showtype: Number(t)
                        }
                    })), i
                }, s.updateShopList = function(e, t) {
                    this._good_time = 0, null != t && t.dmdtabid && (e && e.length > 0 ? (e.forEach((function(e) {
                        e.gid = a.number_valueOf(e.gid), e.limit_per_user = a.number_valueOf(e.limit_per_user), e.exchange = a.number_valueOf(e.exchange), e.is_limit_time = a.number_valueOf(e.is_limit_time), e.limit_time_diamond = a.number_valueOf(e.limit_time_diamond), e.diamond = a.number_valueOf(e.diamond), e.gnum = a.number_valueOf(e.gnum), e.type = a.number_valueOf(e.type), e.showtype = a.number_valueOf(e.showtype), e.count_goods = a.number_valueOf(e.count_goods), e.allow_status = a.number_valueOf(e.allow_status), e.is_limit_num = a.number_valueOf(e.is_limit_num)
                    })), this.shopList[null == t ? void 0 : t.dmdtabid] = e || []) : this.shopList[null == t ? void 0 : t.dmdtabid] = null)
                }, s.getGoodByGid = function(e) {
                    var t = this,
                        i = {},
                        n = {};
                    return null != e && (e = a.number_valueOf(e), Object.keys(this.shopList).forEach((function(a) {
                        (i = t.shopList[a]) && Object.keys(i).forEach((function(t) {
                            i[t].gid == e && (n = i[t])
                        }))
                    }))), n
                }, s.updateGoodNums = function(e, t) {
                    var i = this,
                        n = {},
                        a = {};
                    return null != e && (Object.keys(this.shopList).forEach((function(o) {
                        (n = i.shopList[o]) && Object.keys(n).forEach((function(i) {
                            n[i].gid == e && (n[i].exchange = n[i].exchange + t, n[i].gnum = n[i].gnum - t, n[i].limit_per_user > 0 && n[i].exchange >= n[i].limit_per_user && (n[i].allow_status = -1), a = n[i])
                        }))
                    })), this._refreshRecordList()), console.log("更新商品数量", a), a
                }, s.reset = function() {
                    this._good_time = 0, this._redrod_time = 0, this.recordList = [], this.shopList = {}
                }, s._refreshRecordList = function() {
                    this._curPage = 0, this.recordList = [], this._reqRecordList()
                }, s.setRecordList = function(e) {
                    var t = this;
                    a.table_isEmpty(e) || (this._totalPage = a.number_valueOf(e.tp), a.table_isEmpty(e.info) || (this._curPage = this._curPage + 1, e.info.forEach((function(e) {
                        t.parseRecordList(e)
                    })), this._redrod_time = 0, r.dispatch(o.VIEW_DIAMOND_REFRESH, {
                        tag: "refreshRecord",
                        list: this.recordList
                    })))
                }, s.parseRecordList = function(e) {
                    e.diamond = a.number_valueOf(e.diamond), e.gname = e.gname || "", e.num = a.number_valueOf(e.num), e.orderid = e.orderid || "", e.phone = e.phone || "", e.name = e.name || "", e.addr = e.addr || "", e.status = a.number_valueOf(e.status), e.status_name = e.status_name || "", e.time = e.time || "", e.type = a.number_valueOf(e.type), e.express_name = e.express_name || "", e.express_no = e.express_no || "", e.type == this.eGoodsType.Gold || e.type == this.eGoodsType.GoldBar ? e.status_name = 0 == e.status ? "兑换失败" : "兑换成功" : e.type == this.eGoodsType.TelCharge || e.type == this.eGoodsType.FlowPack || e.type == this.eGoodsType.JDCare || (e.status_name = "待发货", a.string_isEmpty(e.express_name) || (e.status_name = "已发货")), this.recordList.push(e)
                }, s._reqRecordList = function() {
                    if (0 == this._redrod_time || a.time() - this._redrod_time > 3) {
                        this._redrod_time = a.time();
                        var e = a.table_isEmpty(this.recordList) ? 1 : this._curPage + 1;
                        r.dispatch(o.REQ_DIAMOND_SHOP_CONFIG, {
                            tag: "record",
                            param: {
                                page: e
                            }
                        })
                    }
                }, s.getNextPageRecord = function() {
                    (a.table_isEmpty(this.recordList) || this._curPage < this._totalPage) && (this._redrod_time = 0, this._reqRecordList())
                }, s.getRecordList = function() {
                    return a.table_isEmpty(this.recordList) && this._reqRecordList(), this.recordList
                }, i
            }(s)), i._RF.pop()
        }
    }
}))