System.register("chunks:///_virtual/RecommendPop.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./GameConstant.ts", "./Encrypto.ts", "./LocalStorage.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose, i = e.createClass
        }, function(e) {
            n = e.cclegacy
        }, function(e) {
            a = e.Utils
        }, function(e) {
            o = e.GConstants, r = e.StoreKey
        }, function(e) {
            s = e.Encrypt
        }, function(e) {
            c = e.LocalStorage
        }, function(e) {
            l = e.BaseCache
        }],
        execute: function() {
            n._RF.push({}, "c843asC8WZKIKv6oVAOzUrH", "RecommendPop", void 0), e("RecommendPop", function(e) {
                function n(t) {
                    var i;
                    return (i = e.call(this, "RecommendPop") || this).__User = null, i._popData = {}, i._hallPopTime = 0, i._gamePopTime = 0, i._popVersion = -1, i._newPopConfig = {}, i._newPopVersion = -1, i._popOrderData = {}, i._popOrderVersion = -1, i._popNumLimitData = {}, i._popNumLimitConfig = {}, i._popDayCountData = {}, i.__User = t, i
                }
                t(n, e);
                var l = n.prototype;
                return l.getIntoHallPropData = function() {
                    return a.clone(this._popData[o.PopupPos.POS_LOGIN])
                }, l.getIntoGamePropData = function() {
                    return a.clone(this._popData[o.PopupPos.POS_INTO_ROOM])
                }, l.getIntoHallPopTime = function() {
                    return this._hallPopTime
                }, l.getIntoGamePopTime = function() {
                    return this._gamePopTime
                }, l.updatePopData = function(e) {
                    if (e) {
                        for (var t in e.info = a.table_verify(e.info, !0), this._popData = {}, o.PopupPos) Object.prototype.hasOwnProperty.call(o.PopupPos, t) && (this._popData[o.PopupPos[t]] = []);
                        this._hallPopTime = Number(e.sort_max) || 0, this._gamePopTime = Number(e.sorttwo_max) || 0;
                        for (var i = [], n = [], r = 0; r < e.info.length; r++) {
                            var s = e.info[r],
                                c = a.number_valueOf(s.sort, -1),
                                l = a.number_valueOf(s.num, 0),
                                u = a.number_valueOf(s.sorttwo, -1),
                                d = a.number_valueOf(s.numtwo, 0);
                            if (c >= 0 && 0 != l) {
                                var _ = {
                                    id: s.id,
                                    title: s.title,
                                    toolid: s.toolid,
                                    sort: c,
                                    num: l,
                                    scene: o.PopupPos.POS_LOGIN
                                };
                                i.push(_)
                            }
                            if (u >= 0 && 0 != d) {
                                var h = {
                                    id: s.id,
                                    title: s.title,
                                    toolid: s.toolid,
                                    sort: u,
                                    num: d,
                                    scene: o.PopupPos.POS_INTO_ROOM
                                };
                                n.push(h)
                            }
                        }
                        i.sort((function(e, t) {
                            return e.sort - t.sort
                        })), n.sort((function(e, t) {
                            return e.sort - t.sort
                        }));
                        for (var p = {}, f = [], m = [], g = 0; g < i.length; g++) {
                            var E = null,
                                v = i[g].sort;
                            null == p[v] ? (f.push([]), E = f.length - 1, p[v] = E) : E = p[v], f[E].push(i[g])
                        }
                        p = {};
                        for (var T = 0; T < n.length; T++) {
                            var R = null,
                                P = n[T].sort;
                            n[T].toolid, null == p[P] ? (m.push([]), R = m.length - 1, p[P] = R) : R = p[P], m[R].push(n[T])
                        }
                        this._popData[o.PopupPos.POS_LOGIN] = f, this._popData[o.PopupPos.POS_INTO_ROOM] = m, this.updateLocalData(), console.log("弹窗配置数据", this._popData)
                    }
                }, l.getPopInfoByPopID = function(e, t) {
                    if (t = Number(t), !a.string_isEmpty(e) && !a.isNull(t)) {
                        e = String(e);
                        var i = this._popData[e];
                        if (a.table_isEmpty(i)) return null;
                        for (var n = 0; n < i.length; n++)
                            for (var o = 0; o < i[n].length; o++)
                                if (Number(i[n][o].toolid) == t) return a.clone(i[n][o]);
                        return null
                    }
                }, l.checkPopDayCount = function(e) {
                    if (1 == a.table_isEmpty(e)) return !1;
                    var t = String(e.scene),
                        i = a.timeToDataArray(a.time()),
                        n = i.year + "/" + i.month + "/" + i.day;
                    if (this.print("检验弹窗每日限制次数===>dataKey=" + n + " info=", this._popDayCountData, this._popNumLimitData), null != this._popDayCountData.date && String(this._popDayCountData.date) == n || (this._popDayCountData = {
                            date: n
                        }), null != e.toolid) {
                        if (a.table_isEmpty(this._popDayCountData[t])) {
                            if (0 != e.num) return !0;
                            this._popDayCountData[t] = {}
                        }
                        var o = a.number_valueOf(this._popDayCountData[t][String(e.toolid)]),
                            r = Number(e.num);
                        return o < r || -1 == r
                    }
                    return !1
                }, l.updatePopDayCountData = function(e) {
                    if (1 == a.table_isEmpty(e)) return !1;
                    var t = String(e.scene),
                        i = String(e.toolid);
                    this._popDayCountData[t] || (this._popDayCountData[t] = {}), null == this._popDayCountData[t][i] && (this._popDayCountData[t][i] = 0), this._popDayCountData[t][i] = this._popDayCountData[t][i] + 1, this.updateLocalData()
                }, l.updatePopNumLimitConfig = function(e, t) {
                    void 0 === t && (t = !1), a.table_isEmpty(e) || 0 == t && this.updateLocalData()
                }, l.reducePopDayCountData = function(e, t) {
                    null != e && null != t && null != this._popDayCountData[e] && (t = String(t), this._popDayCountData[e][t] = this._popDayCountData[e][t] - 1, this.updateLocalData())
                }, l.reloadLocalData = function() {
                    var e = a.string_format(r.USER_RECOMMEND_POP, this.__User.getUserMid()),
                        t = c.get(e, "");
                    "" != t && (t = a.table_verify(s.JsonDecode(t))), this._popDayCountData = a.table_verify(t.popDayCountData)
                }, l.updateLocalData = function() {
                    var e = {
                            popConfig: null,
                            popNumLimitConfig: this._popNumLimitConfig,
                            popDayCountData: this._popDayCountData,
                            popAllConfig: this._newPopConfig
                        },
                        t = s.JsonEncode(e),
                        i = a.string_format(r.USER_RECOMMEND_POP, this.__User.getUserMid());
                    c.set(i, t)
                }, l.getPopConfigVer = function() {
                    return isNaN(Number(this._popVersion)) && (this._popVersion = null), this._popVersion
                }, l.getPopOrderConfigVer = function() {
                    return isNaN(Number(this._popOrderVersion)) && (this._popOrderVersion = null), this._popOrderVersion
                }, l.getPopAllConfigVer = function() {
                    return isNaN(Number(this._newPopVersion)) && (this._newPopVersion = null), this._newPopVersion
                }, l.clearVer = function() {
                    this._popVersion = null
                }, i(n, [{
                    key: "PopNumLimitData",
                    get: function() {
                        return this._popNumLimitData
                    }
                }, {
                    key: "PopData",
                    get: function() {
                        return this._popData
                    }
                }]), n
            }(l)), n._RF.pop()
        }
    }
}))