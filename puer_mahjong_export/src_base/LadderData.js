System.register("chunks:///_virtual/LadderData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ClientInfo.ts", "./Utils.ts", "./AppEvent.ts", "./GameConstant.ts", "./GameRes.ts", "./Encrypto.ts", "./LocalStorage.ts", "./EventManager.ts", "./BaseCache.ts"], (function(e) {
    var t, i, n, a, o, r, s, c, l, u, d, _;
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
            r = e.StoreKey, s = e.GConstants
        }, function(e) {
            c = e.GamePackage
        }, function(e) {
            l = e.Encrypt
        }, function(e) {
            u = e.LocalStorage
        }, function(e) {
            d = e.EventManager
        }, function(e) {
            _ = e.BaseCache
        }],
        execute: function() {
            i._RF.push({}, "69179NOKchHaqR100VtqQQw", "LadderData", void 0), e("LadderData", function(e) {
                function i(t) {
                    var i;
                    return (i = e.call(this, "LadderData") || this).__User = void 0, i.__User = t, i._getDataByLocal(), i
                }
                t(i, e);
                var _ = i.prototype;
                return _._getDataByLocal = function() {
                    var e = a.string_format(r.USER_LADDER_CFG_CACHE, this.__User.getUserMid()),
                        t = u.get(e, "");
                    a.string_isEmpty(t) ? this._data = {} : this._data = a.table_verify(l.JsonDecode(t), !0)
                }, _.getLadderData = function(e) {
                    return e = this.__User.checkGameId(e), this._data[e.toString()] || {}
                }, _.getLadderWinScore = function(e) {
                    var t;
                    e = this.__User.checkGameId(e);
                    var i = this._data[e.toString()] || {};
                    return 2 == (null == (t = i.winscore) ? void 0 : t.length) ? a.Rand(a.number_valueOf(i.winscore[0]), a.number_valueOf(i.winscore[1])) : a.Rand(10, 15)
                }, _.getLadderLoseScore = function(e) {
                    var t;
                    e = this.__User.checkGameId(e);
                    var i = this._data[e.toString()] || {};
                    return 2 == (null == (t = i.losescore) ? void 0 : t.length) ? a.Rand(a.number_valueOf(i.losescore[0]), a.number_valueOf(i.losescore[1])) : a.Rand(10, 15)
                }, _.checkUpdateLadderData = function(e) {
                    e = this.__User.checkGameId(e);
                    var t = this.getLadderData(e);
                    a.table_isEmpty(t) && d.dispatch(o.NET_CMD_REQ_LADDER_CONFIG, {
                        gameId: e
                    })
                }, _._saveDataToLocal = function(e) {
                    if (e) {
                        var t = a.string_format(r.USER_LADDER_CFG_CACHE, this.__User.getUserMid());
                        u.set(t, l.JsonEncode(e))
                    }
                }, _.setLadderConfig = function(e) {
                    null != e && e.gameId && (this._data[e.gameId.toString()] = e, this._saveDataToLocal(this._data))
                }, _.getLadderConfig = function(e) {
                    e = e || 0;
                    var t = this.getLadderData(n.CurrentGameID);
                    if (!a.table_isEmpty(t) && !a.table_isEmpty(t.data)) {
                        var i = t.data;
                        if (e > i[i.length - 1].endRange) return i[i.length - 1];
                        for (var o = 0; o < i.length; o++) {
                            var r = i[o];
                            if (e >= r.startRange && e <= r.endRange) return r
                        }
                        return i[0]
                    }
                    return {}
                }, _.getLadderConfigByScore = function(e, t) {
                    void 0 === t && (t = null), t = this.__User.checkGameId(t), e = e || 0;
                    var i = this.getLadderData(t || n.CurrentGameID);
                    if (!a.table_isEmpty(i) && !a.table_isEmpty(i.data)) {
                        var o = i.data;
                        if (e > o[o.length - 1].endRange) return o[o.length - 1];
                        for (var r = 0; r < o.length; r++) {
                            var s = o[r];
                            if (e >= s.startRange && e <= s.endRange) return s
                        }
                        return o[0]
                    }
                    return {}
                }, _.getLadderConfigBySegment = function(e, t) {
                    void 0 === t && (t = null), t = this.__User.checkGameId(t), e = e || 0;
                    var i = this.getLadderData(t || n.CurrentGameID);
                    if (!a.table_isEmpty(i) && !a.table_isEmpty(i.data)) {
                        for (var o = i.data, r = 0; r < o.length; r++) {
                            var s = o[r];
                            if (e == s.segment) return s
                        }
                        return o[0]
                    }
                    return {}
                }, _.getLadderExp = function(e) {
                    var t = this.getLadderConfig(e);
                    return a.table_isEmpty(t) ? [0, 1] : [e - t.startRange, t.endRange - t.startRange + 1]
                }, _.getLadderRankIconByLevel = function(e) {
                    return {
                        bundle: c.HALL_REMOTE,
                        path: "rank/image/rankicon/icon" + (e + 1)
                    }
                }, _.getLadderRankTxtByLevel = function(e, t) {
                    void 0 === t && (t = 0);
                    var i = !1;
                    return e == s.RankConstant.RANK_TOP_LEVEL && t > 0 && t <= s.RankConstant.RANK_TOP_NUM && (i = !0), {
                        bundle: c.HALL_REMOTE,
                        path: "rank/image/rankicon/txt" + (i ? e + 2 : e + 1)
                    }
                }, _.getLadderRankEpauletByLevel = function(e) {
                    return {
                        bundle: c.HALL_REMOTE,
                        path: "rank/image/rankicon/epaulet" + (e + 1)
                    }
                }, _.hasRedDot = function(e) {
                    e = this.__User.checkGameId(e);
                    for (var t = this._data && this._data[e] && this._data[e].data || [], i = !1, n = 0; n < t.length; n++)
                        if (1 == t[n].status) {
                            i = !0;
                            break
                        } return i
                }, i
            }(_)), i._RF.pop()
        }
    }
}))