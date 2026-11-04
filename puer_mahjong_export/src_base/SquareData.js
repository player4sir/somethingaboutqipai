System.register("chunks:///_virtual/SquareData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o;
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
            o = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "69bd7R9arxDO6Mq8OYUkJRP", "SquareData", void 0), e("SquareData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "SquareData") || this).__User = null, i._data = [], i.moduleCfg = {
                        1: {
                            title: "麻将馆",
                            icon: "icon_majhong"
                        },
                        2: {
                            title: "免费福利",
                            icon: "icon_gift"
                        },
                        3: {
                            title: "推荐活动",
                            icon: "ico_activity"
                        },
                        4: {
                            title: "麻友交流",
                            icon: "icon_discuss"
                        },
                        5: {
                            title: "热销商品",
                            icon: "icon_hot"
                        }
                    }, i._supportActIds = [], i.welfareCenterRedList = [a.RedDotConf.GiftRedBag, a.RedDotConf.Turntable, a.RedDotConf.Sign, a.RedDotConf.GiftVisitor, a.RedDotConf.FreeReward, a.RedDotConf.CumulativeCheckIn, a.RedDotConf.ActivityCollectionNew, a.RedDotConf.ActivityCollectionReturn, a.RedDotConf.LargeDelivery, a.RedDotConf.ActivityCardGod, a.RedDotConf.GiftClub, a.RedDotConf.ActivityLiveact, a.RedDotConf.AddToDesk, a.RedDotConf.AddToProgram, a.RedDotConf.Kefugift], i.specialPriceGiftRedList = [a.RedDotConf.SuperPayGift, a.RedDotConf.GoldSnake, a.RedDotConf.CumulativePay, a.RedDotConf.FirstPay, a.RedDotConf.Holiday, a.RedDotConf.ActivityWeekCard, a.RedDotConf.ActivityLucklySilver, a.RedDotConf.ActivityCashCow], i.__User = t, i
                }
                t(i, e);
                var o = i.prototype;
                return o.updateSquareData = function(e) {
                    var t, i = this;
                    this._supportActIds = [];
                    var o = 0,
                        r = [],
                        s = [];
                    null == e || null == (t = e.cfg) || t.forEach((function(e) {
                        var t = i.moduleCfg[e.module_id];
                        t && (e.title = t.title, e.icon = t.icon, e.list = e.list || [], e.list.forEach((function(e) {
                            o = n.number_valueOf(e.act_id), i._supportActIds.push(o), 1 == e.gift_enter ? r.push(a.ActivityIDMap[o]) : 2 == e.gift_enter && s.push(a.ActivityIDMap[o])
                        })))
                    })), r.length && (this.welfareCenterRedList = r), s.length && (this.specialPriceGiftRedList = s), this._data = (null == e ? void 0 : e.cfg) || [], this.checkSquareDataConf()
                }, o.syncSquareData = function() {
                    this.updateSquareData({
                        cfg: this._data
                    })
                }, o.getSquareDataByModuleId = function(e) {
                    var t = this._data.filter((function(t) {
                        return t.module_id == e
                    }));
                    return null != t && t.length ? t[0] : null
                }, o.getSupportActIds = function() {
                    return this._supportActIds
                }, o.ckeckSupportActId = function(e) {
                    return !!this._supportActIds.length && this._supportActIds.includes(e)
                }, o.checkSquareDataConf = function() {
                    this.__User.Activity.checkSquareDataConf()
                }, o.getData = function(t) {
                    return t ? e.prototype.getData.call(this, t) : this._data
                }, o.hasRedDot = function() {
                    return !!(this.getSquareRedDot() || this.__User.Activity.signCanShow() || this.__User.RedDot.has_reddot_mail()) || this.getSquareRedDot()
                }, o.getSquareRedDot = function() {
                    for (var e = !1, t = this.getData(), i = 0; i < (null == t ? void 0 : t.length); i++)
                        for (var n = t[i], a = 0; a < (null == (o = n.list) ? void 0 : o.length); a++) {
                            var o;
                            if (1 == n.list[a].status) return !0
                        }
                    return e
                }, o.checkWelfareCenterRedByType = function(e) {
                    return this.welfareCenterRedList.includes(e)
                }, o.checkGiftPackageRedByType = function(e) {
                    return this.specialPriceGiftRedList.includes(e)
                }, o.getWelfareCenterConfig = function() {
                    var e = [];
                    return (this.getData() || []).forEach((function(t) {
                        var i;
                        null == (i = t.list) || i.forEach((function(t) {
                            1 == t.gift_enter && e.push(t)
                        }))
                    })), e.sort((function(e, t) {
                        return e.sort - t.sort
                    })), e
                }, o.getGiftPackageConfig = function() {
                    var e = [];
                    return (this.getData() || []).forEach((function(t) {
                        var i;
                        null == (i = t.list) || i.forEach((function(t) {
                            2 == t.gift_enter && e.push(t)
                        }))
                    })), e.sort((function(e, t) {
                        return e.sort - t.sort
                    })), e
                }, o.getWelfareCenterRedDot = function() {
                    var e = !1;
                    if (this.getWelfareCenterConfig().forEach((function(t) {
                            1 == t.status && (e = !0)
                        })), e) return e;
                    for (var t = this.welfareCenterRedList.length, i = 0; i < t; i++)
                        if (this.__User.Activity.hasRedDot(this.welfareCenterRedList[i])) return !0;
                    return e
                }, o.getGiftPackageRedDot = function() {
                    var e = !1;
                    if (this.getGiftPackageConfig().forEach((function(t) {
                            1 == t.status && (e = !0)
                        })), e) return e;
                    for (var t = this.specialPriceGiftRedList.length, i = 0; i < t; i++)
                        if (this.__User.Activity.hasRedDot(this.specialPriceGiftRedList[i])) return !0;
                    return e
                }, i
            }(o)), i._RF.pop()
        }
    }
}))