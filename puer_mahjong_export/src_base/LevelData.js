System.register("chunks:///_virtual/LevelData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameRes.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }, function(e) {
            i = e.cclegacy
        }, function(e) {
            n = e.GamePackage
        }, function(e) {
            a = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "c5dbf1hjGhLP5rwhTJREo/6", "LevelData", void 0), e("LevelData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "LevelData") || this).__User = void 0, i._levelData = null, i._levelChange = 0, i._userLevelName = 0, i.__User = t, i._levelData = {
                        levels: [{
                            name: "新秀",
                            is_default: 1
                        }, {
                            name: "惊鸿",
                            is_default: 0
                        }, {
                            name: "拔萃",
                            is_default: 0
                        }, {
                            name: "凌云",
                            is_default: 0
                        }, {
                            name: "卓越",
                            is_default: 0
                        }, {
                            name: "潜龙",
                            is_default: 0
                        }, {
                            name: "傲视",
                            is_default: 0
                        }, {
                            name: "至尊",
                            is_default: 0
                        }, {
                            name: "传奇",
                            is_default: 0
                        }, {
                            name: "王者无双",
                            is_default: 0
                        }],
                        growing_levels: [{
                            name: "新秀五阶",
                            start: 0,
                            end: 40
                        }, {
                            name: "新秀四阶",
                            start: 41,
                            end: 60
                        }, {
                            name: "新秀三阶",
                            start: 61,
                            end: 180
                        }, {
                            name: "新秀二阶",
                            start: 181,
                            end: 300
                        }, {
                            name: "新秀一阶",
                            start: 301,
                            end: 420
                        }, {
                            name: "惊鸿五阶",
                            start: 421,
                            end: 600
                        }, {
                            name: "惊鸿四阶",
                            start: 601,
                            end: 800
                        }, {
                            name: "惊鸿三阶",
                            start: 801,
                            end: 1100
                        }, {
                            name: "惊鸿二阶",
                            start: 1101,
                            end: 1500
                        }, {
                            name: "惊鸿一阶",
                            start: 1501,
                            end: 2100
                        }, {
                            name: "拔萃五阶",
                            start: 2101,
                            end: 3e3
                        }, {
                            name: "拔萃四阶",
                            start: 3001,
                            end: 4e3
                        }, {
                            name: "拔萃三阶",
                            start: 4001,
                            end: 5200
                        }, {
                            name: "拔萃二阶",
                            start: 5201,
                            end: 6600
                        }, {
                            name: "拔萃一阶",
                            start: 6601,
                            end: 8200
                        }, {
                            name: "凌云五阶",
                            start: 8201,
                            end: 1e4
                        }, {
                            name: "凌云四阶",
                            start: 10001,
                            end: 12400
                        }, {
                            name: "凌云三阶",
                            start: 12401,
                            end: 14800
                        }, {
                            name: "凌云二阶",
                            start: 14801,
                            end: 17200
                        }, {
                            name: "凌云一阶",
                            start: 17201,
                            end: 2e4
                        }, {
                            name: "卓越五阶",
                            start: 20001,
                            end: 23e3
                        }, {
                            name: "卓越四阶",
                            start: 23001,
                            end: 26e3
                        }, {
                            name: "卓越三阶",
                            start: 26001,
                            end: 3e4
                        }, {
                            name: "卓越二阶",
                            start: 30001,
                            end: 35e3
                        }, {
                            name: "卓越一阶",
                            start: 35001,
                            end: 41e3
                        }, {
                            name: "潜龙五阶",
                            start: 41001,
                            end: 5e4
                        }, {
                            name: "潜龙四阶",
                            start: 50001,
                            end: 6e4
                        }, {
                            name: "潜龙三阶",
                            start: 60001,
                            end: 72e3
                        }, {
                            name: "潜龙二阶",
                            start: 72001,
                            end: 85e3
                        }, {
                            name: "潜龙一阶",
                            start: 85001,
                            end: 1e5
                        }, {
                            name: "傲视五阶",
                            start: 100001,
                            end: 12e4
                        }, {
                            name: "傲视四阶",
                            start: 120001,
                            end: 142e3
                        }, {
                            name: "傲视三阶",
                            start: 142001,
                            end: 165e3
                        }, {
                            name: "傲视二阶",
                            start: 165001,
                            end: 19e4
                        }, {
                            name: "傲视一阶",
                            start: 190001,
                            end: 218e3
                        }, {
                            name: "至尊五阶",
                            start: 218001,
                            end: 25e4
                        }, {
                            name: "至尊四阶",
                            start: 250001,
                            end: 285e3
                        }, {
                            name: "至尊三阶",
                            start: 285001,
                            end: 32e4
                        }, {
                            name: "至尊二阶",
                            start: 320001,
                            end: 36e4
                        }, {
                            name: "至尊一阶",
                            start: 360001,
                            end: 4e5
                        }, {
                            name: "传奇",
                            start: 400001,
                            end: 6e5
                        }, {
                            name: "王者无双",
                            start: 600001,
                            end: 8e5
                        }]
                    }, i
                }
                t(i, e);
                var a = i.prototype;
                return a.setLevelConfig = function(e) {
                    this._levelData = e || {}, this._userLevelName = this._levelData.my_level_name || ""
                }, a.getLevelConfig = function() {
                    return this._levelData
                }, a.setLevelChangeNum = function(e) {
                    void 0 === e && (e = 0), this._levelChange = e
                }, a.getLevelChangeNum = function() {
                    return this._levelChange
                }, a.updateLevelConfigByKey = function(e, t) {
                    this._levelData && Object.prototype.hasOwnProperty.call(this._levelData, e) && (this._levelData[e] = t)
                }, a.updateMedalConfigByName = function(e) {
                    this._levelData.levels.forEach((function(t) {
                        t.name == e ? t.is_default = 1 : t.is_default = 0
                    }))
                }, a.checkLevelRedDot = function() {
                    if (this._levelData) {
                        var e = 1 == this._levelData.is_buy,
                            t = 1 == this._levelData.is_coupon;
                        return e || t
                    }
                }, a.checkLotteryRedDot = function() {
                    return (this._levelData.my_coupon || 0) > 0
                }, a.getLevelNameByExpr = function(e) {
                    for (var t = this._levelData.growing_levels || [], i = t.length - 1, n = 0; n < t.length; n++)
                        if (e >= t[n].start && e <= t[n].end) {
                            i = n;
                            break
                        } return {
                        name: t[i].name,
                        id: i,
                        start: t[i].start,
                        end: t[i].end
                    }
                }, a.getLevelNameById = function(e) {
                    var t = this._levelData.growing_levels || [];
                    return e < 0 || e >= t.length ? "" : t[e].name
                }, a.getMyLevelInfo = function() {
                    var e = {
                        my_level_id: 0,
                        my_level_name: "",
                        my_expr: 0,
                        max_expr: 0
                    };
                    if (!this._levelData) return e;
                    e.my_expr = this._levelData.my_expr || 0, e.max_expr = this._levelData.expr || 0;
                    var t = this.getLevelNameByExpr(e.my_expr);
                    return e.my_level_id = (null == t ? void 0 : t.id) || 0, e.my_level_name = (null == t ? void 0 : t.name) || "", e
                }, a.getLevelIconByLevel = function(e) {
                    return {
                        bundle: n.HALL_REMOTE,
                        path: "image/levelSystem/appellation/" + e
                    }
                }, a.getLevelIconByName = function(e) {
                    for (var t = this._levelData.growing_levels || [], i = t.length - 1, a = 0; a < t.length; a++)
                        if (e == t[a].name) {
                            i = a;
                            break
                        } return {
                        bundle: n.HALL_REMOTE,
                        path: "image/levelSystem/appellation/" + i
                    }
                }, a.getMedalIconByLevel = function(e) {
                    return {
                        bundle: n.HALL_REMOTE,
                        path: "image/levelSystem/medal/" + e
                    }
                }, a.getMedalIconByName = function(e) {
                    for (var t = this._levelData.levels || [], i = 0, a = 0; a < t.length; a++)
                        if (e == t[a].name) {
                            i = a;
                            break
                        } return {
                        bundle: n.HALL_REMOTE,
                        path: "image/levelSystem/medal/" + i
                    }
                }, a.updateMyCouponNum = function(e) {
                    void 0 === e && (e = 0), this._levelData.my_coupon += e, this._levelData.my_coupon = Math.max(0, this._levelData.my_coupon)
                }, a.getCouponNumByType = function(e) {
                    return void 0 === e && (e = 0), this._levelData.lottery_type[e] || 0
                }, a.getMyMedalIndex = function() {
                    for (var e = this._levelData.levels || [], t = 0, i = 0; i < e.length; i++)
                        if (1 == e[i].is_default) {
                            t = i;
                            break
                        } return t
                }, i
            }(a)), i._RF.pop()
        }
    }
}))